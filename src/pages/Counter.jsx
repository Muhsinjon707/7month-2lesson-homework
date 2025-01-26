import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slice/counterSlice';

function Counter() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className='w-full h-[500px] flex flex-col items-center justify-center'>
            <div className='w-1/3 h-[300px] p-10 flex flex-col items-center justify-center gap-10 rounded-lg shadow-lg shadow-blue-200'>
                <h2 className='text-black text-lg px-10 py-3'>{counter}</h2>
                <div className='w-full flex items-center gap-3 justify-between'>
                    <button className='border p-2 rounded-md bg-red-500 text-white' onClick={() => dispatch(increment())}>Increment</button>
                    <button className='border p-2 rounded-md bg-blue-500 text-white' onClick={() => dispatch(decrement())}>Decrement</button>
                    <button className='border p-2 rounded-md bg-green-500 text-white' onClick={() => dispatch(reset())}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter