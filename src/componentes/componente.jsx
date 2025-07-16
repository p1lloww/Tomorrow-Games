import "./Componente-css.css";

export default function Componente(props) {
    return (
        <div className="card">
            <img src={props.imagem} alt="tboi" />
            <div className="info">
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
                <h3>{props.preco}</h3>
            </div>
        </div>
    )
}