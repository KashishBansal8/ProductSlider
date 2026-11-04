import img1 from "../images/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg";
import img2 from "../images/AZ2097-8x6_V2_WG_Peridot_Diamond_Diamond.jpg";
import img3 from "../images/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg";
import img4 from "../images/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg";
import img5 from "../images/AZ2097-8x6_V5_WG_Peridot_Diamond_Diamond.jpg";
import img6 from "../images/AZ2097-8x6.jpg";
import img7 from "../images/AzeeraAppraisalForm.jpg";
import { useState } from "react";

const ProductSlider = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageWidth, setImageWidth] = useState(60);

    const handleImageChange = (image) => {
        setCurrentImage(image);
    }
    return (
        <div className="container m-5">
            <div className="row justify-content-center align-items-center">
                <div className="d-flex flex-column gap-2 col-2 align-items-center justify-content-center">
                    {
                        images.map((image, index) => {
                            return (
                                <div onClick={() => handleImageChange(image)} key={index}>
                                    <img className={image === currentImage ? "border border-dark w-75 slider-img" : "border w-75 border-warning slider-img"} src={image} alt={image + "_" + index} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-10">
                    <img style={{ width: `${imageWidth}%` }} src={currentImage} alt="" />
                </div>
            </div>
            <div className="row m-4">
                <div className="col text-center">
                    <input
                        className="w-75"
                        id="imagerangeSlider"
                        type="range"
                        min="20"
                        max="100"
                        value={imageWidth}
                        onChange={e => {
                            const { value } = e.target;
                            setImageWidth(value);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductSlider;