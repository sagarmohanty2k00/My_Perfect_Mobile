import React from 'react'

function Footer() {
    return (
        <div className="d-flex align-items-center justify-content-between p-2 footer">
            <div className="footer__contact">
                <h3 className="ms-2">Contact Us</h3>
                <div className="d-flex flex-column">
                    <div className="d-flex ms-3">
                        <i className="fa fa-envelope m-auto ms-0 me-2"></i>
                        <span>Email : admin@fakemail.com</span>
                    </div>
                    <div className="d-flex ms-3 mt-2">
                        <i className="fa fa-phone me-2 m-auto ms-0"></i>
                        <span>Phone : +91 945 469 6969</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column me-5">
                <button className='btn-ghost'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                    </svg>
                </button>
                <span>Give Your Valuable Feedback.</span>
            </div>
        </div>
    )
}

export default Footer
