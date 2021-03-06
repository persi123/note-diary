import React,{useEffect,useState} from 'react'
import { Input , Button} from 'antd';

import { DownloadOutlined } from '@ant-design/icons';
import axios from "axios";
import  TinyUrl from "tinyurl";
import shortenUrl from "@kulkul/tinyurl-client";
import Shortener from "@studiohyperdrive/shortener"
import shortUrl from "node-url-shortener";
import "./home.css";
import Loading from "./animation"
import { Link } from 'react-router-dom';


const { TextArea } = Input;

export default function Home() {

    const [note, setnote] = useState({data:""})
    const [loading, setloading] = useState(false)
    const [id, setid] = useState("")
    const [link, setlink] = useState("")
    const onchange =(e)=>{
        setnote( ({
            ...note,
            data: e.target.value,
          }));
    }
    
    const GenerateLink=async()=>{
        if(note.data){
            setloading(true);
            const defaultAxios = axios.create({
                baseURL:process.env.NODE_ENV === "production"? process.env.BASE_URL:"http://localhost:5000",
                /* other custom settings */
              });
    
           const data=await defaultAxios.post(`/api`,note).then(item => setid(item.data._id));
        }
    }

    useEffect(() => {
    if(id){
        let url=process.env.NODE_ENV === "production"? process.env.BASE_URL:"http://localhost:3000";
     TinyUrl.shorten(`https://note-diary.herokuapp.com/note/${id}`, function(res, err) {
        if (err)
            console.log(err)
        setlink(res); //Returns a shorter version of http://google.com - http://tinyurl.com/2tx
        setloading(false)
    })}
},[id]) 

    return (
        <div className="main">
        <h1>Add Your Note-:</h1>
        <div className="container">
        
        <TextArea rows={4} onChange={onchange}  value={note.data}/>    
      
        <Button shape="round" icon={<DownloadOutlined />} size="large" >
         <a onClick={GenerateLink}>  Generate Link</a> 
        </Button>
        <div>
            {process.env.NODE_ENV === "production"? process.env.BASE_URL+"Ccc":"kuch ni"}
        </div>
    <div>{id?id:"id ni h"}</div>
        <div className="link"><p>Your link will place here</p>
        {loading?<Loading/>: <a href={`${link}`} >{link}</a>}
        </div>
        <Link to="/note/5f2393b6f28d233dd4f3cac3">Demo</Link>
        </div>
        </div>
    )
}
