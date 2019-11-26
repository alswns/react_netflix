import React from 'react';
import Main from './pages/main'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Tv from'./pages/Tv'
import Banner from './components/banner'
import New from './pages/New'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    color:white;
  }
body{
  background-color:black;
}

`

const App = () => {
  return (
    <>
      <header>
        <GlobalStyle />
        
        <Router>
          <Route path="/" exact>
          <Main/>
          
          </Route>
          <Route path='/tv' exact>
          
            <Tv/>
          </Route>
          <Route path='/test' exact>
          
            <div style={{color:'white'}}  > test</div>
          </Route>
          <Route path='/new' exact>
          <New/>
          </Route>
          <Route path='/favorite' exact>
            
          </Route>
        </Router>

      </header>
    </>
  )

}

export default App;
