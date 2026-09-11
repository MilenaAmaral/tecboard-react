import './App.css'

function TituloDoFormulario(props) {
  return (
    <h2>{props.children}</h2>
  )
}

function CampoDeFormulario({ children }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>{children}</label>
  )
}

function CampoDeEntrada(props) {
  return (
    <input {...props} />
  )
}

function FormularioDeEvento() {
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
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormularioDeEvento />
    </main>
  )
}

export default App
