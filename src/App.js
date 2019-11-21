import React from 'react';  
import Main from './pages/main'

import {createGlobalStyle} from 'styled-components'
const GlobalStyle=createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
body{
  background-color:black;
}

`

const App = () => {
return(
  <>
  <header>
    <GlobalStyle/>
    <Main/>
    
    
  </header>
  </>
)

}

export default App;
