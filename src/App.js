
import  {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, MainBody, theme } from './Styles/GlobalStyles';
import Home from './pages/Home'
import Skill from './components/SkillSection/Skill';
import MobNav from './components/MobNavigation/MobNav';
import NavBar from './components/Navigation/NavBar';
import MyProjects from './components/Projects/MyProjects';
import Contacts from './components/Contact/Contatos';
import Footer from './components/Footer/Footer';
function App() {
  const [menuVisible, setMenuIsVisible] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <MainBody> 
        <MobNav menuVisible={menuVisible} setMenuIsVisible={setMenuIsVisible}/>
        <NavBar setMenuIsVisible={setMenuIsVisible}/>
        <Container>
          <Home/>
          <Skill/>
          <MyProjects/>
          <Contacts/>
        </Container>
        <Footer/>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
