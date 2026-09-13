import "./lista-suspensa.estilos.css";

export function ListaSuspensa () {

    return (
        <select className="lista-suspensa-form">
            <option value="">Selecione uma opção</option>
            <option value="opcao1">FRONT-END</option>
            <option value="opcao2">BACK-END</option>
            <option value="opcao3">DEVOLPS</option>
            <option value="opcao4">INTELIGÊNCIA ARTIFICIAL</option>
            <option value="opcao5">DATA SCIENCE</option>
            <option value="opcao6">CLOUD</option>
        </select>
    );
}
