import './App.css'

function TituloDoFormulario (props) {
  return(
    <h2>{props.children}</h2>
  )
}

function FormularioDeEvento () {

  return(
    <form className="form-evento">
      <TituloDoFormulario >Preencha para criar um evento:</TituloDoFormulario>
      <fieldset>
        <label htmlFor="nome">Qual é o nome do evento?</label>
        <input type="text" id="nome" placeholder="Summer dev hits"/>
      </fieldset>
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
