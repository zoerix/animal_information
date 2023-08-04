const SharkImg = () => {
    const sharkImgUrl = 'https://images.unsplash.com/photo-1583265226154-43beba9afab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHNoYXJrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    return (
        <div className="ImgContainer">
            <img src={sharkImgUrl} alt="PlaceholderShark" />
        </div>
    )
}

export default SharkImg;


