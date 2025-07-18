import React from "react";
import comanndo from "../../assets/images/svgs/icon/comando.svg";
import filme from "../../assets/images/svgs/icon/filme.svg";
import social from "../../assets/images/svgs/icon/social.svg";
import desporto from "../../assets/images/svgs/icon/desporto.svg";
import musica from "../../assets/images/svgs/icon/musica.svg";
import cup from "../../assets/images/svgs/icon/cup.svg";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext";

function World() {
  const navigate = useNavigate();
  const { startNewGame } = useQuiz();

  const itemns_btn = [
    {
      name: "Games",
      icon: comanndo,
    },
    {
      name: "Filme",
      icon: filme,
    },
    {
      name: "Redes Sociais",
      icon: social,
    },
    {
      name: "Desporto",
      icon: desporto,
    },
    {
      name: "Musica",
      icon: musica,
    },
    {
      name: "Startups Inovação",
      icon: cup,
    },
  ];

  const handleCategorySelect = (category) => {
    startNewGame(category);
    navigate('/trivia');
  };

  return (
    <React.Fragment>
      <section className="st_wrapper">
        <main className="st_container_content">
          <h1 className="st__highlight">
            Qual é o <br />
            teu Mundo
          </h1>
          <div className="st_container_btn">
            {itemns_btn.map((item, index) => (
              <button 
                key={index} 
                onClick={() => handleCategorySelect(item.name)}
              >
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { World };
