import React from 'react';
import { useParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
    let bgColor = useParams();
    return(
        <main style={{height: "100vh", backgroundColor: bgColor.colorname}}>
            Background Color Changer
        </main>
    )
}
