import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";

function AppLayout() {
  return (
    <React.Fragment>
      <section className="app_layout-wrapper">
        <main>
          <Outlet />
        </main>
      {  <Footer />}
      </section>
    </React.Fragment>
  );
}

export { AppLayout };