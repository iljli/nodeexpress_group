import { Link, Switch, Route } from 'react-router-dom'
import './normilize.css';
import Articles from './components/Articles'
import Backend from './components/Backend'
import Home from './components/Home'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const myTheme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f3e5f5',
      dark: '#c0b3c2',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff6f60',
      main: '#e53935',
      dark: '#ab000d',
      contrastText: '#ffffff',
    },
  },
});


function App() {


  return (
    <ThemeProvider theme={myTheme}>
      <Switch>
        <Route exact path="/">
          <Home colorPrimary="primary" colorSecondary="secondary" />
        </Route>
        <Route path="/articles">
          <Articles colorPrimary="primary" colorSecondary="secondary" />
        </Route>
        <Route path="/backend">
          <Backend />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
