/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const LandingPage = () => {
  return (
    <main className="glass container p-4 p-sm-5">
      <h1>We (Still) Got This!</h1>
      <p>
        <strong>In need of support and safe access to abortion?</strong> One of our aunties (or uncles) has your back!
        <br/>
        Interested in collective action? The <em>"auntie"</em> uprising is here. <strong>Join the revolution today!</strong>
      </p>
      <hr/>
      <button className="primary-pink join-now me-4" data-bs-toggle="modal" href="#RegisterToggle">Join Now</button>
    </main>
  )
}

export default LandingPage