import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, decrementQuantity, incrementQuantity } from '../store/slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';

function ShoppingCart() {
    const carts = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const validate = (name, quantity) => {
        if (!name || !quantity) return false;

        if (name.length < 3) return false;

        return true;
    }

    const handleAdd = (e) => {
        e.preventDefault();

        if (!validate(name, quantity)) return;

        dispatch(addItem({ name, quantity }));
        toast("New product added!");
    }

    const handleDeleteThis = (id) => {
        let conf = confirm("Do you want to delete this?");

        if (!conf) return;

        dispatch(removeItem(id));
    }

    return (
        <div className='w-full flex flex-col items-center justify-center mt-10 gap-10'>
            <form className='w-2/3 rounded-lg shadow-lg hover:shadow-slate-200 min-h-[200px] p-10 flex flex-col items-start gap-20'>
                <label className='w-full flex items-start justify-between gap-5' htmlFor="productName">Enter product name:
                    <input className='
                        w-7/12 text-center transition-all duration-300 ease-out border-b pb-3 outline-none
                        hover:transform placeholder:hover:-translate-y-2
                    '
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id='productName'
                        placeholder='Enter product name...' />
                </label>
                <label className='w-full flex items-start justify-between gap-5' htmlFor="productQuantity">Enter product quantity:
                    <input className='
                        w-7/12 text-center transition-all duration-300 ease-out border-b pb-3 outline-none
                        hover:transform  placeholder:hover:-translate-y-2
                    '
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        type="text"
                        id='productQuantity'
                        placeholder='Enter product quantity...' />
                </label>
                <div>
                    <button onClick={handleAdd} className='bg-blue-400 text-white px-5 cursor-pointer py-3'>Add</button>
                </div>
            </form>
            <div className='w-full flex items-center justify-center flex-wrap flex-1 gap-2'>
                {
                    carts.length > 0 && carts.map((cart, index) => {
                        return (
                            <div key={index} className='
                                    w-[30%] rounded-md shadow-lg flex flex-col items-start justify-center
                                    gap-4 px-5 py-10
                                '>
                                <span onClick={() => handleDeleteThis(cart.id)} className='self-end cursor-pointer'>✖</span>
                                <div className='w-full flex flex-col items-start justify-center gap-5'>
                                    <h2 className='flex justify-between items-center w-full'>
                                        Product name: <b>{cart.name}</b>
                                    </h2>
                                    <h3 className='flex justify-between items-center w-full'>
                                        Product quantity: <b>{cart.quantity}</b>
                                    </h3>
                                </div>
                                <div className='w-full flex justify-end gap-x-3'>
                                    <button onClick={() => dispatch(incrementQuantity(cart.id))} className='
                                        rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-lg 
                                        hover:shadow-xl cursor-pointer
                                    '>+</button>
                                    <button onClick={() => dispatch(decrementQuantity(cart.id))} className='
                                        rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-lg 
                                        hover:shadow-xl cursor-pointer
                                    '>-</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default ShoppingCart