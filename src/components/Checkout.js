import React from 'react';
import "./Checkout.css";
import "./Subtotal";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
               <img className="checkout__ad"
               src="https://images-na.ssl-images-amazon.com/images/G/01/img13/computers-pc-hardware/other/3-11_pc-147-logitech-900x120._CB485928679_.gif"
               alt=""
               />
               <div>
                    <h3>Hello, {user?.email}</h3>
                   <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image="https://www.datafeedwatch.com/hs-fs/hubfs/ebooks-images/amazon-sales-ebook-cover.png?width=570&height=380&name=amazon-sales-ebook-cover.png"
                            price={item.price}
                            rating={item.rating}
                        />
                        
                    ))}
                    
               </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
