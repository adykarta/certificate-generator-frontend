import React, {useState} from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { PictureContext } from './utils/context'

function App() {
  const routing = useRoutes(routes);
  const [image, setImage] = useState({
    url: null,
    filename: null
  })
  return (
    <div className="App">
      <PictureContext.Provider value={{image, setImage}}>
        {routing}
      </PictureContext.Provider>
    </div>
  );
}

export default App;
