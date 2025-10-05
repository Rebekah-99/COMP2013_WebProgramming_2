import colors from "../../data/data";
import { useState } from "react";

function getRandomNumb(numData) {
    return Math.floor(Math.random() * numData)
}

export default function ColorBox({ color }) {
    const numData = 25;
    const [randomNum, setRandomNum] = useState(getRandomNumb(numData));
    
    return(
        <div className="ColorBox"
        onClick={() => setRandomNum(() => getRandomNumb(numData))}
        style = {{backgroundColor: colors[randomNum]}}
        ></div>
    )
}
