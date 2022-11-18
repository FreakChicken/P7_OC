import "./Apropos.scss";
import Banner from "../../components/Banner/Banner";
import banner_img_apropos from "../../assets/banner_img_apropos.png";
import Collapse from "../../components/Collapse/Collapse";
import data from "../../data/collapseContent.json";

// Import du tableau de contenu à placer dans le composant "Collapse"
const collapseContentArray = data;

function Apropos() {
    return (
        <div className="apropos_wrapper">
            <div className="banner_apropos">
                <Banner image={banner_img_apropos} />
            </div>
            <section className="collapses_wrapper_apropos">
                {collapseContentArray.map(({ title, id, content }) => (
                    <Collapse
                        title={title}
                        id={id}
                        content={content}
                        key={title + id}
                    />
                ))}
            </section>
        </div>
    );
}

export default Apropos;
