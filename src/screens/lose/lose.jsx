import React from "react";
import { Link } from "react-router-dom";
import {Button} from "../../components"
function Lose() {
  return (
    <React.Fragment>
      <section className="lo_wrapper">
        <main className="lo_container">
         
          <h2>OPS... NÃO  <br/> FOI DESTA!</h2>
          <Link to="/">
               <Button text="RECOMEÇAR" className="btn btn_Light" /> 
              </Link>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lose };
