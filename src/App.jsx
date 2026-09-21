import "./App.css";
import { useState } from "react";

import { Banner } from "./componentes/Banner";

import { CardEvento } from "./componentes/CardEvento";

import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

import { Tema } from "./componentes/Tema";

// no react, componentes são FUNÇÕES

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },

    {
      id: 2,
      nome: "back-end",
    },

    {
      id: 3,
      nome: "devops",
    },

    {
      id: 4,
      nome: "inteligência artificial",
    },

    {
      id: 5,
      nome: "data science",
    },

    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      descricao: "Um encontro para celebrar e fortalecer a presença feminina no desenvolvimento front-end.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Back-end na prática",
      descricao: "Boas práticas, ferramentas e experiências para construir aplicações back-end robustas.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_3.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Interfaces que conectam",
      descricao: "Descubra como criar experiências digitais acessíveis, rápidas e intuitivas.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_4.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Arquitetura de APIs",
      descricao: "Uma conversa sobre desenho, integração e evolução de APIs modernas.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_5.png",
      tema: temas[1],
      data: new Date(),
      titulo: "Serviços escaláveis",
      descricao: "Estratégias para preparar seus serviços para crescer com consistência.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_6.png",
      tema: temas[2],
      data: new Date(),
      titulo: "DevOps sem mistério",
      descricao: "Automação, colaboração e entrega contínua para times mais eficientes.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_7.png",
      tema: temas[3],
      data: new Date(),
      titulo: "Inteligência artificial hoje",
      descricao: "Os avanços que já estão transformando produtos, equipes e negócios.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_8.png",
      tema: temas[3],
      data: new Date(),
      titulo: "IA generativa na prática",
      descricao: "Casos reais para usar modelos generativos com criatividade e responsabilidade.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_9.png",
      tema: temas[3],
      data: new Date(),
      titulo: "O futuro da inteligência artificial",
      descricao: "Especialistas discutem as próximas mudanças provocadas pela inteligência artificial.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_10.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Dados que transformam",
      descricao: "Como transformar grandes volumes de dados em decisões melhores.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_11.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Data science aplicada",
      descricao: "Do problema ao modelo: técnicas para gerar valor com ciência de dados.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_12.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Estratégias orientadas por dados",
      descricao: "Aprenda a construir uma cultura de decisões guiadas por evidências.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_13.png",
      tema: temas[4],
      data: new Date(),
      titulo: "Insights em escala",
      descricao: "Pipelines, análises e visualizações para encontrar padrões importantes.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_14.png",
      tema: temas[5],
      data: new Date(),
      titulo: "Cloud em movimento",
      descricao: "Arquiteturas flexíveis para entregar mais velocidade e segurança na nuvem.",
    },
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_15.png",
      tema: temas[5],
      data: new Date(),
      titulo: "Nuvem pronta para crescer",
      descricao: "Práticas para escalar sua infraestrutura sem perder controle dos custos.",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos(function (eventosAtuais) {
      return [...eventosAtuais, evento];
    });
  }

  return (
    <main className="app">
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento}
      />

      <div className="lista-eventos">
        {temas.map(function (item) {
          const eventosDoTema = eventos.filter(function (evento) {
            return evento.tema.id === item.id;
          });

          if (eventosDoTema.length === 0) {
            return null;
          }

        return (
          <section className="secao-tema" key={item.id}>
            <Tema tema={item} />

            <div className="grade-eventos">
              {eventosDoTema.map(function (evento, index) {
                return <CardEvento evento={evento} key={`${evento.titulo}-${index}`} />;
              })}
            </div>
          </section>
        );
        })}
      </div>
    </main>
  );
}

export default App;