import tboi from "./tboiwall.jpg"
import landscape from "./tboiwall.jpg"

export default function Frieren() {
    return (
        <div className="principal">
            <div className="hero">
                <h1>tboi</h1>
                <div className="hero-sem-titulo">
                    <div className="esquerda">
                        <img src={tboi} alt="tboi" className="frieren" />
                    </div>
                    <div className="direita">
                        <img src={landscape} alt="landscape" className="imagem-direita" />
                        <p>Embarque em uma aventura emocionante no universo de Frieren! "Frieren Game" é um RPG narrativo inspirado no aclamado anime Frieren: Beyond Journey's End. Viva a história da maga Frieren enquanto ela explora o mundo após a derrota do Rei Demônio, enfrentando novas ameaças, desvendando mistérios e conhecendo personagens inesquecíveis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}