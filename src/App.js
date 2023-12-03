import './css/App.css';
import HomePage from './pages/home';
import About from './pages/about';
import GettingStarted from './pages/gettingstarted';
import Faq from './pages/faq';
import ThankYou from './pages/thankyou';
import NotFound from './pages/notfound';
import NavBar from './navbar';
import Footer from './footer';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources/getting-started" element={<GettingStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources/faq" element={<Faq />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />}>"404 Not Found"</Route> 
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
