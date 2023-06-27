import React from 'react'
import "../../components/Header/PopUp/popup.scss";
import {  useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/hooks';
import { bookingAction } from '../../redux/slice/sliceBooking';
function PopUpBookingOrder() {
      const { orderMenu } = useSelector((s: RootState) => s.bookingReducer);
const dispatch = useAppDispatch()
  
  return (
    <div className='popup_order'>
          <h3 className='order_title'>Thank you for your order</h3>
          <div className='order_subtitle'><strong>Your order:</strong></div>
          {orderMenu.length > 0 && orderMenu.map(orr => (
       
       <>
     
{orr.order.map(({name, count}) => (
    <>
   <p className='order_text'> {name}: {count}</p>
  
    </>
))}
                   <div className='order_price'>Total price: {orr.price}</div>
              </>
              
          ))}
         
          <button className='cardShop__button' onClick={() => dispatch(bookingAction.showOrder())}>Ok</button>
    </div>
  )
}

export default PopUpBookingOrder
