// Material UI
import { ThemeProvider, createTheme, StylesProvider } from '@material-ui/core/styles';

// React
import React from 'react';

// React-Dom
import ReactDOM from 'react-dom';

// Outros arquivos
import Router from 'routes';
import './index.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);