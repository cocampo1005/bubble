import './SignupPage.scss';


function SignupPage() {
    return (
        <section className="signup">
            <div className="signup__card">
                <h1 className='signup__header'>Sign Up</h1>
                <form className='signup__form'>
                <div className='signup__email input-container'>
                        <label className='signup__email-label label'>EMAIL</label>
                        <input className='signup__email-input input' type='text' ></input> 
                    </div>
                    <div className='signup__username input-container'>
                        <label className='signup__username-label label'>USERNAME</label>
                        <input className='signup__username-input input' type='text' ></input> 
                    </div>
                    <div className='signup__password input-container'>
                        <label className='signup__password-label label'>PASSWORD</label>
                        <input className='signup__password-input input' type='text' ></input> 
                    </div>
                    <button className='signup__form-button'>SIGN UP WITH EMAIL</button>
                </form>
                <h4 className='signup__or'>OR SIGN UP WITH</h4>
                <div className='signup__footer'>
                    <p className='signup__footer-text'>Don't have an account?</p>
                    {/* <Link className='signup__footer-link' to={'/signup'}>Sign Up</Link> */}
                </div>
            </div>
        </section>
    )
}

export default SignupPage;