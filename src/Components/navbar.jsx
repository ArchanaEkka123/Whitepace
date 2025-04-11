import { Link } from "react-router-dom";
import "./navbar.scss"; // Optional for styling

const Navbar = () => {
  return (
    
      <nav className="navbar justify-evenly  ">

<div className="nav-heading-logo">
        <img
                className="logo"
                src="/images/whitepace-Logo.svg"
                alt="Description of the image"
                width={37}
                height={29}
              />
       <p className="nav_heading  text-amber-50">whitepace</p> 
        </div>
      
        <ul className="nav_ul ">
          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link to="/" className="nav_content text-amber-50 ">
              Products
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/about" className="nav_content  text-amber-50">
            Solutions
            </Link>
          </li>

          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/contactform" className="nav_content text-amber-50 ">
              {" "}
              Resources
            </Link>
            </li>
            <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/contactform" className="nav_content  text-amber-50">
              {" "}
              Pricing
            </Link>
            </li>
          </ul>
          
          <div className="nav-button-holder  ">  
          <button className="button-login text-black">Login</button>
                
                <button className="button text-amber-50">Try Whitepace free
                <img
                className="right-box-image  "
                src="/images/right-arrow.svg"
                alt="Description of the image"
                width={14}
                height={14}
              />
                </button>
                
              </div>


       


      </nav>  
     
  );
};

export default Navbar;
