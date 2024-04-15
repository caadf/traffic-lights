import React, { useState } from 'react';

const Light = () => {
    const [selectColor, setSelectColor] = useState("")


    return (


        <div className="traffic-light">
            <div
                onClick={() => setSelectColor("red")}
                className={
                    "light-red" + (selectColor === "red" ? " glow" : "")}>
        </div>
        <div
                onClick={() => setSelectColor("yellow")}
                className={
                    "light-yellow" + (selectColor === "yellow" ? " glow" : "")}>
        </div>

        <div
                onClick={() => setSelectColor("green")}
                className={
                    "light-green" + (selectColor === "green" ? " glow" : "")}>
        </div>
    </div >
);
}

export default Light