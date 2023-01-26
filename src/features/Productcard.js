import { useDispatch, useSelector } from 'react-redux';
import { addItem, addQuant } from '../Cart/CartSlice';
import './Productcard.css';
import { Rating } from './Rating';

export function Productcard(props) {
    const { title, description, price, image, rating, id } = props.product;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
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
            <button onClick={() => {
                if (cart.findIndex(item => item.id === id) === -1) {
                    dispatch(addItem({
                        id,
                        title,
                        price,
                        image,
                        quant: 1
                    }))
                } else {
                    dispatch(addQuant(id));
                }
            }}>ADD TO CART</button>
        </div>
    )
}