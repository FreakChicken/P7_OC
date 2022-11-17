import "./Banner.scss";
import Banner_background from "../../assets/Banner_background.png";

function Banner({ image, text }) {
    return (
        <div className="banner_position">
            <div className="banner_div">
                <h1>{text}</h1>
                <img
                    className="banner_div_image"
                    src={image}
                    alt="Banière de Kasa"
                />
                <img
                    className="banner_div_background"
                    src={Banner_background}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Banner;
