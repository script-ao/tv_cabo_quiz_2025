import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components";

function AppLayout() {
  return (
    <React.Fragment>
      <section className="app_layout-wrapper">
        <main className="app_container">
          <Outlet />
          <Footer />
        </main>
      </section>
    </React.Fragment>
  );
}

export { AppLayout };
