import "./Pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">

        <div className="top-content">
          <div className="top-text">
            <h2>Everything you need for <span>$99 a month</span></h2>
            <p>Include every feature we offer plus unlimited projects and unlimited users.</p>
          </div>
          <div className="top-button">
            <button>Get started today</button>
          </div>
        </div>

        <div className="bottom-content">
          <div className="card">
            <p><span>Everything you need</span></p>
            <h3>All-in-one platform</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sequi soluta, expedita maiores inventore et corrupti eum molestias voluptate nostrum!</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
            <p>Lorem ipsum dolor sit amet?</p>
          </div>
        </div>
      </div>
    </div>
  )
};
