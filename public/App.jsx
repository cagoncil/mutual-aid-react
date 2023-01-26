import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import './styles.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
