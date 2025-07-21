import Componente from "../../componentes/componente";
import frieren from "../Frieren/wallpaperFrieren.jpg"
import Frieren from "../Frieren/Frieren";
import tboiImage from "./Logo_The_Binding_of_Isaac_Rebirth.jpg"
import "./home-css.css"
import { NavLink, Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="home">

            <div className="title">
                <h1>TOMORROW GAMES🎮</h1>
            </div>

            <div className="games">
                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>

                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>

                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>
                
                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>

                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>

                <Link to="/Frieren">
                    <Componente imagem={frieren} nome="FRIEREN GAME" descricao="Ajude Frieren a explorar masmorras mágicas em busca de artefatos lendários, resolvendo enigmas e enfrentando criaturas fantásticas com feitiços únicos." preco="R$10,00" />
                </Link>
                
                <Link to="/Tboi">
                    <Componente imagem={tboiImage} nome="THE BINDING OF ISAAC" descricao="Quando a mãe de Isaac começa a ouvir a voz de Deus exigindo um sacrifício que prove sua fé, Isaac foge para o porão enfrentando um turbilhão de inimigos transtornados, irmãs e irmãos desaparecidos, seus medos e mais cedo ou mais tarde a sua própria mãe." preco="R$25,00" />
                </Link>
            </div>
        </div>
    )
}