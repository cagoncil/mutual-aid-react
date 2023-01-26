import React from 'react'

const Modal = () => {
  return (
    <>
      <div className="modal fade" id="LoginToggle" aria-hidden="true" aria-labelledby="LoginToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="LoginToggleLabel">Login</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Please enter your login credentials below:</p>
              <form action="/login" method="POST">
                <input className="px-2 py-1 m-1" type="email" name="email" placeholder="Email Address" spellCheck="false" required/>
                  <br/>
                <input className="px-2 py-1 m-1" type="password" name="password" placeholder="Password" spellCheck="false" autoComplete="off" required/>
                  <br/>
                <p><button className="secondary-pink submit-pink mt-2">Submit</button></p>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button className="primary-pink" data-bs-target="#RegisterToggle" data-bs-toggle="modal">Register Today</button> */}
              <button className="primary-pink">Register Today</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="RegisterToggle" aria-hidden="true" aria-labelledby="RegisterToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="RegisterToggleLabel">Sign Up</h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Please register an account with us below:</p>
              <form action="/register" method="POST">
                <input className="px-2 py-1 my-1" type="text" name="name" placeholder="Name" spellCheck="false" required/>
                <br/>
                <input className="px-2 py-1 my-1" type="email" name="email" placeholder="Email Address" spellCheck="false" required/>
                <br/>
                <input className="px-2 py-1 my-1" type="password" name="password" placeholder="Password" spellCheck="false" autoComplete="off" required/>
                <br/>
                <p><button className="secondary-pink submit-pink mt-2" type="submit">Submit</button></p>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button className="primary-pink" data-bs-target="#LoginToggle" data-bs-toggle="modal">I Already Have An Account</button> */}
              <button className="primary-pink">I Already Have An Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal