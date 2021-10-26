import  { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Card from './components/Card';
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global.js'
import content from './content'
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#FAEFB2',
    body: '#fff',
    footer: '#ED39F6'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
