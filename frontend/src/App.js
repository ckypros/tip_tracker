import Header from './components/Header';
import NewEntry from './components/NewEntry';
import HomeScreen from './components/screens/HomeScreen';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/new_entry' component={NewEntry} />
          <Route path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
