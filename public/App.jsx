import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Modal from './Modal';
import './styles.css';

const App = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar/>
      <LandingPage modal={modalShow} setModal={setModalShow}/>
      {modalShow && <Modal/>}
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
