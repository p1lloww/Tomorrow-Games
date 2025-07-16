import frieren from "./frieren.jpeg"
import landscape from "./frieren-landscape.jpeg"
import "./Frieren-css.css"

export default function Frieren() {
    return (
        <div className="principal">
            <h1>Frieren game</h1>
            <div className="hero">
                <div className="esquerda">
                    <img src={frieren} alt="frieren" className="frieren" />
                </div>
                <div className="direita">
                    <img src={landscape} alt="landscape" />
                    <p>descriçãaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaao</p>
                </div>
            </div>
        </div>
    )
}