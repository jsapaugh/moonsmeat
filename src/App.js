import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, AboutUs, Home, Meats } from './components';
import {Switch, Route} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
        <Switch>
          <Route path="/home" component={Home} exact/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/meats" component={Meats}/>
        </Switch>
    </ThemeProvider>
  );
}
export default App;
