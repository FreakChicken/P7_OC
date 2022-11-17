import "./Logement.scss";
import AppartInfo from "../../components/Appart_Info/Appart_info";
import Carrousel from "../../components/Carrousel/Carrousel";

function Logement() {
    return (
        <div>
            <div>
                <Carrousel />
            </div>
            <div>
                <AppartInfo />
            </div>
        </div>
    );
}

export default Logement;
