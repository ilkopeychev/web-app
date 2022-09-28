import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ApiData from "./containers/ApiData";

function App() {
  return (
    <div>
      <Header />
      <h1> Example of React Axios Delete Request </h1>
      <ApiData></ApiData>
      <Footer />
    </div>
  );
}

export default App;
