import "./formulario-de-evento.estilos.css";

import { TituloDoFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloDoFormulario>Preencha para criar um evento:</TituloDoFormulario>

      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>

          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>

          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
      </div>
    </form>
  );
}
