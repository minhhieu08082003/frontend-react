import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const images = [];
  return (
    <div className="App">
      <Navbar />
      <Slider images={images} />
    </div>
  );
}

export default App;
