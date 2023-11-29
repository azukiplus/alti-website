import './App.css';
import HomePage from './pages/home';
import About from './pages/about';
import GettingStarted from './pages/gettingstarted';
import Faq from './pages/faq';
import ThankYou from './pages/thankyou';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
