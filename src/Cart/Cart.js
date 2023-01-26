import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import { addQuant, removeItem, removeQuant } from './CartSlice';

export function Cart(props) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <div id='cart'>
            {cart.length === 0 ? <h3 className='main-font'>0 Items in Cart</h3> : cart.map((item, index) => {
                return <div key={index} className='cart-card'>
                    <div className='image-circle' style={{ backgroundImage: `url(${item.image})` }}>
                    </div>
                    <div className='cart-info'>
                        <strong style={{
                            maxWidth: '18rem'
                        }}>{item.title}</strong>
                        <div className='cart-info-line'>
                            <strong className='main-font'>Quantity: </strong>
                            <button className='material-symbols-outlined'
                                onClick={() => {
                                    dispatch(addQuant(item.id));
                                }}
                            >
                                add
                            </button>
                            <span className='main-font'>
                                {item.quant}
                            </span>
                            <button className='material-symbols-outlined'
                                onClick={() => {
                                    if (item.quant > 1) {
                                        dispatch(removeQuant(item.id));
                                    } else {
                                        dispatch(removeItem(item.id));
                                    }
                                }}
                            >
                                remove
                            </button>
                        </div>
                    </div>
                    <h3 className='main-font'>
                        {(item.price * item.quant).toFixed(2)} $
                    </h3>
                </div>
            })}
            <div>
                {cart.length !== 0 && <div>
                    <h3 className='main-font' style={{textAlign: 'right', marginRight: '2rem'}}>
                        Total: &nbsp;
                        {cart.map(item => item.price * item.quant).reduce((total, num) => total + num).toFixed(2)}
                    </h3>
                </div>}
            </div>
        </div>
    );
}