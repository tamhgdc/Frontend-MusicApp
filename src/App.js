import { Container } from "react-bootstrap";

import Header from './components/Header'
import Route from './components/Routes'

import 'react-h5-audio-player/lib/styles.css';
function App() {
  return (
    <Container>
      <Header />
      <Route />
    </Container>
  );
}

export default App;
