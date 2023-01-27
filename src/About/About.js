import { Link } from "react-router-dom";
import "./About.css";
export function About(props){
    return (
        <main className="about-page">
            <h2 className="main-font">About this Shopping cart</h2>
            <p>
                I created this mockup shopping cart just to add it to my portfolio, so I can show my abilities
                it works with a combination of : React, Redux and React-router
                It fetches product information from an open <a href="http://fakestoreapi.com/" target="_blank" rel="noreferrer">fakestore API </a>
                but the cart is stored in the local redux state, it does not use the APIs cart
            </p>
            <Link to="/" className="back-link">
                <span className="material-symbols-outlined">arrow_back_ios</span>
                Go back to the cart 
                <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
        </main>
    );
}