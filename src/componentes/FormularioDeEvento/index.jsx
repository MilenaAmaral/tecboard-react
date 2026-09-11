import "./formulario-de-evento.estilos.css";

import { TituloDoFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento() {
    return (
    <form className="form-evento">
        <TituloDoFormulario>
        Preencha para criar um evento:
        </TituloDoFormulario>

        <CampoDeFormulario>
        <Label htmlFor="nome">Qual é o nome do evento?</Label>

        <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nome"
        />
        </CampoDeFormulario>
    </form>
    );
}