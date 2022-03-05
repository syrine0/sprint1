import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/Landingpage/LandingPage.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes';

const App = () => (
  
    <Router>
      <Header />
      <main>
        <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/mynotes" element={<MyNotes />}/>
        </Routes>
      </main>
      <Footer />
    </Router> 
)

export default App;
