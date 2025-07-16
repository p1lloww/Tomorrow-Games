import Componente from "../../componentes/componente";
import frieren from "./frieren.jpeg"
import Frieren from "../Frieren/Frieren";
import { NavLink, Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            <Link to="/Frieren">
                <Componente imagem={frieren} nome="frieren" descricao="descrição" preco="10,00" />
            </Link>
            {/* <Frieren /> */}
        </div>
    )
}