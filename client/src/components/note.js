import React, { useEffect,useState } from 'react'
import axios from "axios"
import "./note.css";

export default function Note(props) {
    console.log(props)
  
    const [data, setdata] = useState("")
    useEffect(() => {
      const defaultAxios = axios.create({
        baseURL:"http://localhost:5000",
         /* other custom settings */
       });
       async function dataFetch (){
            const data= await defaultAxios.get(`/api${props.match.url}`).then(item => setdata(item.data[0].data));
        }
      dataFetch()
    },[])
    return (
        <div className="containerNote">
            <h1>Here is your Lines</h1>
            <div className="Note">
              <p>{data?data:"empty"}</p>
            </div>
    <h2></h2>
        </div>
    )
}
