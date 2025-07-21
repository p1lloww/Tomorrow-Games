import frieren from "./wallpaperFrieren.jpg"
import landscape from "./frieren-landscape.jpeg"
import "./Frieren-css.css"

export default function Frieren() {
    return (
        <div className="principal">
            <div className="hero">
                <h1 className="hero">Frieren Game</h1>
                <div className="hero-sem-titulo">
                    <div className="esquerda">
                        <img src={frieren} alt="frieren" className="frieren" />
                    </div>
                    <div className="direita">
                        <img src={landscape} alt="landscape" className="imagem-direita" />
                        <p>Embarque em uma aventura emocionante no universo de Frieren! "Frieren Game" é um RPG narrativo inspirado no aclamado anime Frieren: Beyond Journey's End. Viva a história da maga Frieren enquanto ela explora o mundo após a derrota do Rei Demônio, enfrentando novas ameaças, desvendando mistérios e conhecendo personagens inesquecíveis.</p>
                        <h2 className="buy">COMPRAR</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}