import React from 'react';

function CartItem ({item, value}) {
    const {id,name,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return(
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={require(`../${img}`)} className="img-fluid" alt="product" height="50" width="50" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">sản phẩm : </span>{name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">giá : </span>${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(Number(id))} >-</span>
                        <span className="btn btn-black mx-1" >{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(Number(id))} >+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(Number(id)) } >
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>${total}</strong>
            </div>
        </div>
    )
}


export default CartItem;