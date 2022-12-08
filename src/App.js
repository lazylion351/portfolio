import './App.css';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import OptionsItem from "./components/OptionsItem.js";
import ProjectItem from "./components/ProjectItem.js";
import data from "./assets/data.json";
import PageItem from "./components/PageItem.js";

data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {

  const [curPage, setCurPage] = useState("UIUX Portfolio");
  const [curTitle, setCurTitle] = useState("UIUX Portfolio");

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleClick = (event) => {
    setCurPage(event.target.value);
    setCurTitle(event.target.value)
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} alignItems='center'>
        <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end'}}>
          <Container>
          <Typography component="div" variant="h3" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {curTitle}
          </Typography>
          <Container>
            <Button 
              color="warning"
              size="large" 
              variant="text"
              onClick={handleClick}
              value="UIUX Portfolio"
              >
              Home
            </Button>
            {/* <Button 
              color="warning"
              size="large" 
              variant="text"
              onClick={handleClick}
              value="About Me"
              >
              About Me
            </Button> */}
          </Container>
          </Container>
        </AppBar>  
        <PageItem curPage={curPage} setCurPage={setCurPage} setCurTitle={setCurTitle}/>
      </Stack>
        <br></br>
      </ThemeProvider>
    </div>
  );
}

export default App;
