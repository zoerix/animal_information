import React, { useState } from "react";
import './MonkeyImg.scss'

const MonkeyImg = () => {
    const [imgUrl, setImgUrl] = useState("https://www.placemonkeys.com/500");
    const handleImgClick = () => {
        const newImgUrl = "https://www.placemonkeys.com/500";
        setImgUrl(newImgUrl);
    };
    return (
        <div className="ImgContainer" onClick={handleImgClick}>
            <img src={imgUrl} alt="PlaceholderImgMonkey"  />
        </div>
    )
}

export default MonkeyImg
