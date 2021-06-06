import React from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Header classname="header" />
      <Footer classname="footer" />
      <Note classname="note" />
    </div>
  );
}

export default App;
