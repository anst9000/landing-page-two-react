import "./Hero.css";
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

export const  Hero  = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h2>Data to enrich your <span className="primary-color">online business</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo libero inventore id quae facilis repellendus numquam eum quas exercitationem!</p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <span className="icon"><FaDatabase />Staxx</span>
                <span className="icon"><FaAsterisk />Star AI</span>
                <span className="icon"><FaAccusoft />Accusoft</span>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-text">Sign in with</p>
                <div className="social-logins">
                  <span><FaFacebook size={20} /></span>
                  <span><FaTwitter size={20} /></span>
                  <span><FaGithub size={20} /></span>
                </div>
                <div className="divider">
                  <p><span>Or</span></p>
                </div>

                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button>Create Your Account</button>
                </form>
              </div>

              <div className="form-footer">
                <p>By signing up, you agree to our <span className="primary-color">Terms, Data Policy</span> and <span className="primary-color">Cookies Policy</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
