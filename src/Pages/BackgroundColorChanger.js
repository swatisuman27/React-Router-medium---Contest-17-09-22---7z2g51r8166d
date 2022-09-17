import React from 'react';
import { useParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
    let {colorName} = useParams();
    return(
        <main style={{height: "100vh", backgroundColor: `${colorName}`}}>
            Background Color Changer
        </main>
    )
}
