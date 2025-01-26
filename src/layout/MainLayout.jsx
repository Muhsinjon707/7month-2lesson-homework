import React from 'react'
import { Link } from 'react-router-dom'

import userCircle from "../assets/images/icons/user-circle.png"
import homeSolid from "../assets/images/icons/home-solid.png"
import joystick from "../assets/images/icons/joystick.png"
import shoppingBag from "../assets/images/icons/shopping-bag.png"
import mobileVibration from "../assets/images/icons/mobile-vibration.png"
import listPlus from "../assets/images/icons/list-plus.png"
import userPlus from "../assets/images/icons/user-plus.png"

function MainLayout({ children }) {
    return (
        <div className='w-full mx-auto flex flex-col items-center'>
            <div className='shadow-md shadow-slate-400 w-7xl py-4 px-3 rounded-md flex flex-col items-center justify-center gap-5'>
                <header className='w-full mx-auto flex items-center justify-between border-b pb-5'>
                    <div className='flex gap-2 items-center text-black'>
                        <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={userCircle} alt="" width='18' />
                        <Link className='font-bold' to='/'>Muhsinjon.</Link>
                    </div>
                    <nav>
                        <ul className='flex items-center gap-10'>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={homeSolid} alt="Home icon" width={18} />
                                <Link className='hover:font-bold' to='/'>Home</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={joystick} alt="Play joystick icon" width={18} />
                                <Link className='hover:font-bold' to='/counter'>Counter</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={shoppingBag} alt="Shopping bag icon" width={18} />
                                <Link className='hover:font-bold' to='/shopping-cart'>Cart</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={mobileVibration} alt="Modal icon" width={18} />
                                <Link className='hover:font-bold' to='/modal-control'>Modal</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={listPlus} alt="List icon" width={18} />
                                <Link className='hover:font-bold' to='/todo'>Todo</Link>
                            </li>
                            <li className='flex items-center gap-1'>
                                <img className='transition-all duration-300 ease-in hover:transform hover:-translate-y-1' src={userPlus} alt="List icon" width={18} />
                                <Link className='hover:font-bold' to='/players-list'>Players</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className='w-full min-h-screen h-auto'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default MainLayout