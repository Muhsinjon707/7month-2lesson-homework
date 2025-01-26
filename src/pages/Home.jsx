import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='w-full flex items-center justify-center gap-10 pt-20 flex-wrap flex-1'>
            <div className='
            min-h-[150px] min-w-[300px] rounded-lg shadow-lg transition-shadow duration-150 ease-linear hover:shadow-xl 
            hover:shadow-slate-200 flex flex-col items-center justify-center gap-8
        '>
                <h2>#1</h2>
                <div className='bg-blue-500 p-5 text-white font-semibold'>
                    <Link to='/counter'>Counter App</Link>
                </div>
            </div>
            <div className='
            min-h-[150px] min-w-[300px] rounded-lg shadow-lg transition-shadow duration-150 ease-linear hover:shadow-xl 
            hover:shadow-slate-200 flex flex-col items-center justify-center gap-8
        '>
                <h2>#2</h2>
                <div className='bg-blue-500 p-5 text-white font-semibold'>
                    <Link to='/shopping-cart'>Shopping Cart</Link>
                </div>
            </div>
            <div className='
            min-h-[150px] min-w-[300px] rounded-lg shadow-lg transition-shadow duration-150 ease-linear hover:shadow-xl 
            hover:shadow-slate-200 flex flex-col items-center justify-center gap-8
        '>
                <h2>#3</h2>
                <div className='bg-blue-500 p-5 text-white font-semibold'>
                    <Link to='/modal-control'>Modal Control</Link>
                </div>
            </div>
            <div className='
            min-h-[150px] min-w-[300px] rounded-lg shadow-lg transition-shadow duration-150 ease-linear hover:shadow-xl 
            hover:shadow-slate-200 flex flex-col items-center justify-center gap-8
        '>
                <h2>#4</h2>
                <div className='bg-blue-500 p-5 text-white font-semibold'>
                    <Link to='/todo'>To Do Application</Link>
                </div>
            </div>
            <div className='
            min-h-[150px] min-w-[300px] rounded-lg shadow-lg transition-shadow duration-150 ease-linear hover:shadow-xl 
            hover:shadow-slate-200 flex flex-col items-center justify-center gap-8
        '>
                <h2>#5</h2>
                <div className='bg-blue-500 p-5 text-white font-semibold'>
                    <Link to='/players-list'>Players List</Link>
                </div>
            </div>
        </div>
    )
}

export default Home