import React from "react";
import { useQuiz } from "../../context/quizContext";
import { Button } from "../../components";

function World() {
  const { categories, startNewGame } = useQuiz();

  return (
    <React.Fragment>
      <section className="world_wrapper">
        <main className="world_container">
          <div className="world_header">
            <h1>Escolha uma categoria</h1>
            <p>Selecione uma categoria para começar o quiz</p>
          </div>

          <div className="world_categories">
            {categories.map((category, index) => (
              <div key={index} className="world_category">
                <Button 
                  className="btn_category" 
                  text={category.charAt(0).toUpperCase() + category.slice(1).replace(/_/g, ' ')} 
                  onClick={() => startNewGame(category)}
                />
              </div>
            ))}

            <div className="world_category">
              <Button 
                className="btn_category btn_category_all" 
                text="Todas as categorias" 
                onClick={() => startNewGame()}
              />
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { World };
