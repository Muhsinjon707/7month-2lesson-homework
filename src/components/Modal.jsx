import React from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../store/slice/modalSlice';


function Modal() {
    const dispatch = useDispatch();

    const handleConfirm = (e) => {
        e.preventDefault();
        dispatch(close());
    }

    return (
        <div className='
            w-1/3 py-10 flex flex-col items-center justify-center gap-4 bg-white border
            rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            shadow-2xl shadow-slate-400
        '>
            <h4 className='text-center capitalize font-bold'>Remove?    </h4>
            <div className='flex items-center gap-4'>
                <button onClick={handleConfirm} className='p-1 rounded-xs border border-purple-600 text-purple-600 uppercase' type='button'>confirm</button>
                <button
                    onClick={() => dispatch(close())}
                    className='p-1 rounded-xs border border-red-800 text-red-800 uppercase' type='button'>
                    cancel
                </button>
            </div>
        </div>
    )
}


export default Modal
