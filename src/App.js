import React, {useState} from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { PictureContext, HeaderContext } from './utils/context'

function App() {
  const routing = useRoutes(routes);
  const [image, setImage] = useState('')
  const [header, setHeader] = useState([])
  return (
    <div className="App">
      <PictureContext.Provider value={{image, setImage,}}>
        <HeaderContext.Provider value={{header, setHeader}}>
          {routing}
        </HeaderContext.Provider>
      </PictureContext.Provider>
    </div>
  );
}

export default App;
