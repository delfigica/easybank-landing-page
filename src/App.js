import { Banner } from './Components/Banner';
import { NavBar } from './Components/NavBar';
import {Box} from '@mui/material'
import { Information } from './Components/Information';
import { Articles } from './Components/Articles';
import { Footer } from './Components/Footer';

function App() {
  return (
    <Box>
      <NavBar />
      <Banner />
      <Information />
      <Articles />
      <Footer/>
    </Box>
  );
}

export default App;
