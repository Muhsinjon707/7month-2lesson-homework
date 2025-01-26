import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleComplete, deleteTodo } from '../store/slice/todoSlice'
import { open, close } from '../store/slice/modalSlice'
import Modal from '../components/Modal'

import trash from "../assets/images/icons/trash.png"

function Todo() {
    const [text, setText] = useState("");
    const todos = useSelector(state => state.todo);
    const isOpen = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();

    function handleAddTodo(e) {
        e.preventDefault();

        if (!text) return;

        dispatch(addTodo(text));
        setText("");
    }

    const handleDeleteTodo = (id) => {
        dispatch(open())
        dispatch(deleteTodo(id));
    }

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10'>
            {
                isOpen && <Modal />
            }

            {
                !isOpen && (
                    <div className='w-1/2 min-h-10/12 py-6 px-15 bg-linear-to-b from-[#f7f1f0] to-[#eff2f1]'>
                        <div className='
                        w-full bg-linear-to-r from-[#604586] to-[#526194] h-[130px] rounded-tl-2xl rounded-tr-2xl
                        relative flex flex-col items-center justify-center
                    '>
                            <h2 className='text-white absolute top-1 text-3xl font-light'>TODO List</h2>
                            <div className='
                            bg-white w-[90%] h-[120px] rounded-lg absolute top-14 
                            flex flex-col items-center justify-center gap-5 shadow-lg
                        '>
                                <input className='
                            w-[260px] border-b-2 border-[#8f94af] px-1 placeholder:font-semibold
                            outline-none
                        '
                                    type="text"
                                    placeholder='What would you like to do?'
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <button
                                    onClick={handleAddTodo}
                                    type='button'
                                    className='bg-red-400 text-white py-1 px-14 rounded-md'>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className='
                        bg-[#f7f7ff] w-full min-h-[450px] rounded-br-2xl rounded-bl-2xl 
                         flex flex-col items-center justify-start 
                    '>
                            <div className='
                        relative w-[90%] min-h-[350px] top-15 bg-white flex flex-col items-center justify-start
                        rounded-lg shadow-lg 
                    '>
                                <h3 className='text-start w-full p-5 font-bold shadow-b'>Todo List</h3>
                                <table className='w-full px-5'>
                                    <thead className='w-full'>
                                        <tr className='w-full bg-[#f9f9f9]'>
                                            <th className='text-gray-400 font-normal py-3 text-start px-10'>List</th>
                                            <th className='text-gray-400 font-normal py-3 text-center px-10'>Status</th>
                                            <th className='text-gray-400 font-normal py-3 text-center px-10'>Close</th>
                                        </tr>
                                    </thead>
                                    <tbody className='w-full'>
                                        {
                                            todos.length > 0 && todos.map((todo, index) => {
                                                return (
                                                    <tr key={index} className='w-full mx-auto border-b border-gray-200'>
                                                        <td className='py-4 text-start px-10'>{todo.text}</td>
                                                        <td className='py-4 text-center px-10 '>
                                                            <span onClick={() => handleToggleComplete(todo.id)} className='bg-[#9bc1bc] text-white py-1 px-3 font-semibold rounded-md'>
                                                                {todo.completed ? "completed" : "pending"}
                                                            </span>
                                                        </td>
                                                        <td className='py-4 text-center px-10'>
                                                            <img onClick={() => handleDeleteTodo(todo.id)} className='mx-auto bg-red-400' width={18} src={trash} alt="Trash icon" />
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Todo