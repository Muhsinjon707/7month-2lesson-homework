import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from './layout/MainLayout'

import Home from './pages/Home'
import Counter from './pages/Counter'
import ShoppingCart from './pages/shoppingCart'
import Error from './pages/Error'
import ModalControl from './pages/modalControl'
import Todo from './pages/Todo'
import PlayersList from './pages/PlayersList'

function App() {
    return (
        <div className='max-w-screen'>
            <Routes>
                <Route index element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                } />

                <Route path='/counter' element={
                    <MainLayout>
                        <Counter />
                    </MainLayout>
                } />

                <Route path='/shopping-cart' element={
                    <MainLayout>
                        <ShoppingCart />
                    </MainLayout>
                } />

                <Route path='/modal-control' element={
                    <MainLayout>
                        <ModalControl />
                    </MainLayout>
                } />

                <Route path='/todo' element={
                    <MainLayout>
                        <Todo />
                    </MainLayout>
                } />

                <Route path='/players-list' element={
                    <MainLayout>
                        <PlayersList />
                    </MainLayout>
                }/>

                <Route path='*' element={
                    <Error />
                } />
            </Routes>
        </div>
    )
}

export default App