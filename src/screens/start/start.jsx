import React from "react";
import comanndo from "../../assets/images/svgs/icon/comando.svg"
import filme from "../../assets/images/svgs/icon/filme.svg"
import social from "../../assets/images/svgs/icon/social.svg"
import desporto from "../../assets/images/svgs/icon/desporto.svg"
import musica from "../../assets/images/svgs/icon/musica.svg"
import cup from "../../assets/images/svgs/icon/cup.svg"
import {Link} from "react-router-dom"

function Start() {

  const itemns_btn= [
    {
      name:"games",
      icon: comanndo 
    },
    {
      name:"filme",
      icon:filme
    },
     {
      name:"Redes Social",
      icon:social
    },
     {
      name:"Desporto",
      icon:desporto
    }
    ,
     {
      name:"Musica",
      icon:musica
    },
     {
      name:"Startups Inovação",
      icon:cup
    }
  ]
  return (
    <React.Fragment>
      <section className="st_wrapper">
        <main className="st_container_content">
          <h1 className="st__highlight">Qual é o <br/>teu Mundo</h1>
          <div className="st_container_btn">
            {
              itemns_btn.map((item, index) => (
                <Link key={index} to="/trivia">
                  <button>
                    <img src={item.icon} alt="" />
                    <span>{item.name}</span>
                  </button>
                </Link>
              ))
            }
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Start };
