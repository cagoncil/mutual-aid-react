/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import './styles.css';

const LandingPage = ({ modalShow, setModalShow }) => {
  return (
    <main className="glass container p-4 p-sm-5">
      <h1>We (Still) Got This!</h1>
      <p>
        <strong>In need of support and safe access to abortion?</strong> One of our aunties (or uncles) has your back!
        <br/>
        Interested in collective action? The <em>"auntie"</em> uprising is here. <strong>Join the revolution today!</strong>
      </p>
      <hr/>
      <Button 
        className='button primary-pink join-now'
        onClick = {() => setModalShow(!modalShow)}
      >
        Join Now
      </Button>
    </main>
  )
}

export default LandingPage