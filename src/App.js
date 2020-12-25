import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { PictureContext, HeaderContext } from "./utils/context";
import "./App.css";

function App() {
  const routing = useRoutes(routes);
  const [image, setImage] = useState({
    url: null,
    filename: null,
  });
  const [header, setHeader] = useState([]);
  if (window.innerWidth > 1000) {
    return (
      <div className="App">
        <PictureContext.Provider value={{ image, setImage }}>
          <HeaderContext.Provider value={{ header, setHeader }}>
            {routing}
          </HeaderContext.Provider>
        </PictureContext.Provider>
      </div>
    );
  } else {
    return (
      <div className="mobile">
        <h3>Doesn't support mobile version yet.</h3>
      </div>
    );
  }
}

export default App;
