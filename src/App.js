import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, AboutUs, Home, Meats } from './components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
        <Switch>
          <Route path="/moonsmeat" component={Home} exact/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/meats" component={Meats}/>
        </Switch>
    </ThemeProvider>
    </Router>
  );
}
export default App;
