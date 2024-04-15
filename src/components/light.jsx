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
                    "light-red" + (selectColor === "yellow" ? " glow" : "")}>
        </div>

        <div
                onClick={() => setSelectColor("green")}
                className={
                    "light-red" + (selectColor === "green" ? " glow" : "")}>
        </div>
    </div >
);
}

export default Light