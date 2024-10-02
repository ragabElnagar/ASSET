import React from "react";
import "./App.css";
import Layout from "./layout-component/layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
