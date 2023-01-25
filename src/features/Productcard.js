import './Productcard.css';
import { Rating } from './Rating';

export function Productcard(props) {
    const { title, description, price, image, rating } = props.product;
    return (
        <div className='product-card'>
            <div className='info-grid'>
                <img src={image} alt={title} />
                <div className='second-column'>
                    <strong>{title}</strong>
                    <p>{description}</p>
                </div>
                <div className='third-column'>
                    <span id='rating'><Rating rating={rating.rate} /></span>
                    <span id='price'>{price} $</span>
                </div>
            </div>
            <button>ADD TO CART</button>
        </div>
    )
}