import { useState } from "react"

export default function Button (props){
    const [colorFondo, setColorFondo] = useState ("#4353baff");
   


    function handLeChangeColor(){
        setColorFondo("#bb3377");
    }

    return(
        <div>
            <button onClick={handLeChangeColor} style={{backgroundColor: colorFondo}}>
                {props.label}
            </button>
        </div>
    )
}