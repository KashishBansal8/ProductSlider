import { render, screen } from '@testing-library/react';
import ProductSlider from '../ProductSlider';
import img1 from "../../images/AZ2097-8x6_V1_WG_Peridot_Diamond_Diamond.jpg";
import img2 from "../../images/AZ2097-8x6_V2_WG_Peridot_Diamond_Diamond.jpg";
import img3 from "../../images/AZ2097-8x6_V3_WG_Peridot_Diamond_Diamond.jpg";
import img4 from "../../images/AZ2097-8x6_V4_WG_Peridot_Diamond_Diamond.jpg";
import img5 from "../../images/AZ2097-8x6_V5_WG_Peridot_Diamond_Diamond.jpg";
import img6 from "../../images/AZ2097-8x6.jpg";
import img7 from "../../images/AzeeraAppraisalForm.jpg";

test('Should render images', () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
    ];
    render(<ProductSlider />);
    const testImage = document.querySelector("img");
    expect(testImage).toBeInTheDocument();
});
