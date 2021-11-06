import ListContainer from './containers/ListContainer.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material';
import { Provider } from 'use-http';

const theme = createTheme();


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider url={process.env.REACT_APP_API_URL}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                Límites máximos de residuos (LMR)
              </Typography>
            </Toolbar>
          </AppBar>
          <ListContainer/>
        </Box>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
