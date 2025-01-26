import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decrementQuantity, incrementQuantity } from '../store/slice/cartSlice';

function ShoppingCart() {
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    console.log(carts);

    return (
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-10'>
            <form className='w-2/3 rounded-lg shadow-lg hover:shadow-slate-200 min-h-[200px] p-10 flex flex-col items-start gap-20'>
                <label className='w-full flex items-start justify-between gap-5' htmlFor="productId">Enter product name:
                    <input className='
                        w-7/12 text-center transition-all duration-300 ease-out border-b pb-3 outline-none
                        hover:transform placeholder:hover:-translate-y-2
                    '
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        type="text"
                        id='productId'
                        placeholder='Enter product name...' />
                </label>
                <label className='w-full flex items-start justify-between gap-5' htmlFor="productQuantity">Enter product quantity:
                    <input className='
                        w-7/12 text-center transition-all duration-300 ease-out border-b pb-3 outline-none
                        hover:transform  placeholder:hover:-translate-y-2
                    '
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(e.target.value)}
                        type="text"
                        id='productQuantity'
                        placeholder='Enter product name...' />
                </label>
                <div>
                    <button onClick={handleAdd} className='bg-blue-400 text-white px-5 cursor-pointer py-3'>Add</button>
                </div>
            </form>
            <div className='w-full flex items-center justify-center flex-wrap flex-1 gap-2'>
                {
                    storedCarts.length > 0 && storedCarts.map((cart, index) => {
                        return (
                            <div key={index} className='
                                w-[30%] p-8 rounded-md shadow-xl transition-shadow duration-500 ease-in-out hover:shadow-lg
                                flex flex-col items-start justify-center gap-10
                            '>
                                <div className='w-full flex flex-col items-start justify-center gap-3'>
                                    <h2 className='w-full flex justify-between items-center'>ID: <span>{cart.id}</span></h2>
                                    <h2 className='w-full flex justify-between items-center'>Product: <span className='font-bold'>{cart.product}</span></h2>
                                    <h3 className='w-full flex justify-between items-center'>
                                        Quantity:
                                        <span className='bg-slate-400 text-white px-2 py-1 rounded-lg'>
                                            {cart.quantity}
                                        </span>
                                    </h3>
                                </div>
                                <hr className='w-full bg-black' />
                                <div className='w-full flex flex-col items-start justify-center gap-3'>
                                    <h3>
                                        <b>Controls: </b>
                                    </h3>
                                    <div className='w-full self-end flex items-center justify-end gap-3'>
                                        <button onClick={() => dispatch(incrementQuantity())} className='bg-red-500 p-1 text-white capitalize rounded-lg px-2'>Increment</button>
                                        <button onClick={() => dispatch(decrementQuantity())} className='bg-blue-500 p-1 text-white capitalize rounded-lg px-2'>Decrement</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ShoppingCart