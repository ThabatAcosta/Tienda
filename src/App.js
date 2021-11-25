import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Components
import Layouts from './layouts/Layouts';
import Home from './pages/Home';
import { CartContextProvider } from './context/CartContextProvider';
import Products from './pages/Products';
import Error404 from './pages/Error404';




function App() {
  
  return (
    <div className=' h-screen'>

      <CartContextProvider>
        <Layouts>
          <BrowserRouter>
          <Switch>
            
            <Route path="/" exact>
              <Home/>
              </Route>

            <Route path="/Products/:category" exact>
              <Products/>
              </Route>


            <Route path="/*">
              <Error404 />
              </Route>  

          </Switch>
        </BrowserRouter>
      </Layouts>
    </CartContextProvider>


    </div>
  );
}

export default App;
