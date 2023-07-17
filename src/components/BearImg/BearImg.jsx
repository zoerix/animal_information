import React, { useState } from "react";
import './BearImg.scss'

const BearImg = () => {
    const [imgUrl, setImgUrl] = useState("https://placebear.com/g/200/300");
    const handleImgClick = () => {
        const newImgUrl = "https://placebear.com/g/200/300";
        setImgUrl(newImgUrl);
    };
    return (
        <div className="ImgContainer" onClick={handleImgClick}>
            <img src={imgUrl} alt="PlaceholderImgBear"  />
        </div>
    )
}

export default BearImg

