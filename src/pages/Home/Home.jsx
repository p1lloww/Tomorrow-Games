import Componente from "../../componentes/componente";
import frieren from "../Frieren/wallpaperFrieren.jpg"
import Frieren from "../Frieren/Frieren";
import tboiImage from "../tboi/tboiwall.jpg"
import "./home-css.css"
import { NavLink, Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home">
            <Link to="/Frieren">
                <Componente imagem={frieren} nome="FRIEREN" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                
            </Link>

            <Link to="/Tboi">
                <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
            </Link>
            {/* <Frieren /> */}
        </div>
    )
}