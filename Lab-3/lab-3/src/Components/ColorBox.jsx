
//CURRENTLY WORKING FOR SETTING RANDOM COLORS TO A SMALL INDIVIDUAL BOX

import colors from "../../data/data";
import { useState } from "react";

function getRandomNumb(numData) {
    return Math.floor(Math.random() * numData)
}

export default function ColorBox({ color }) {
    const numData = 25;
    const [randomNum, setRandomNum] = useState(color);

    return(
        <div className="ColorBox"
        onClick={() => setRandomNum(() => getRandomNumb(numData))}
        style = {{backgroundColor: colors[randomNum]}}
        ></div>
    )
}



