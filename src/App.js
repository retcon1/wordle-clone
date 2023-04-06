import "./App.css";
import React from "react";
import Header from "./components/Header.jsx";
import Grid from "./components/grid/Grid";
import Input from "./components/grid/Input";

function App() {
  return (
    <div>
      <header>
      <Header />
      </header>
      <section>
      <Grid />
      </section>
      <section>
        <Input />
      </section>
    </div>
  );
}

export default App;
