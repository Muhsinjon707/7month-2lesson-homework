import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal';
import { open, close } from '../store/slice/modalSlice';

function ModalControl() {
    const isOpen = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();
    return (
        <div>
            {isOpen && <Modal />}
            {
                !isOpen && (
                    <button
                        onClick={() => dispatch(open())}
                        className='
                    bg-red-600 px-4 py-2 text-white rounded-3xl transition-bg duration-300 ease-in hover:bg-red-700
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                '>
                        Delete
                    </button>
                )
            }
        </div>
    )
}

export default ModalControl;