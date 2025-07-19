import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext/quizContext";

import { vectorImages, images } from "../../assets";

function World() {
  const navigate = useNavigate();
  const { startNewGame } = useQuiz();

  const itemns_btn = [
    {
      name: "games",
      displayName: "Games",
      icon: vectorImages.icons.game.game_icon,
    },
    {
      name: "filmes_e_series",
      displayName: "Filmes e Séries",
      icon: vectorImages.icons.game.movie_icon,
    },
    {
      name: "redes_sociais",
      displayName: "Redes Sociais",
      icon: vectorImages.icons.game.social_icon,
    },
    {
      name: "desporto",
      displayName: "Desporto",
      icon: vectorImages.icons.game.sport_icon,
    },
    {
      name: "musica",
      displayName: "Música",
      icon: vectorImages.icons.game.music_icon,
    },
    {
      name: "startups_e_inovacao",
      displayName: "Startups e Inovação",
      icon: vectorImages.icons.game.startup_icon,
    },
  ];

  const handleCategorySelect = (category) => {
    startNewGame(category);
    navigate("/trivia");
  };

  return (
    <React.Fragment>
      <section className="wo_wrapper">
        <main className="wo_container_content">
          <div className="wo_title-container">
            <span>Qual é o</span>
            <span>teu Mundo</span>
          </div>

          <div className="wo_buttons-container">
            {itemns_btn.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategorySelect(item.name)}
              >
                <img src={item.icon} alt="" />
                <span>{item.displayName}</span>
              </button>
            ))}
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { World };
