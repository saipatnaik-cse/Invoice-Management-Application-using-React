import React from "react";
import "./App.css"
import DataGridforHRC from "./components/DataGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <DataGridforHRC />
      <Footer />
    </div>
  );
}

export default App;
