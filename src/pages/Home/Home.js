import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import banner_img from "../../assets/Banner_img_home.png";
import data from "../../data/apartments.json";
import Card from "../../components/Card/Card";

function Home() {
    return (
        <div className="page_layout">
            <Banner image={banner_img} text="Chez vous, partout et ailleurs" />
            <section className="card_list_wrapper">
                <ul className="card_list">
                    {data.map(({ id, title, cover }) => {
                        return (
                            <li key={id}>
                                <Card id={id} title={title} cover={cover} />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Home;
