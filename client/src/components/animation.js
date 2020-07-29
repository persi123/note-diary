import React from 'react'
import Lottie from "react-lottie";
import animationData from "./animateFile.json"

export default function animation() {
    const defaultOptions = {
       loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
            <Lottie  options={defaultOptions} height={50} width={50}/>
        </div>
    )
}
