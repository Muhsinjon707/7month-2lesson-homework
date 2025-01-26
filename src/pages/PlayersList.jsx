import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import userAdmin from "../assets/images/icons/user-admin.png"
import bookContent from "../assets/images/icons/book-content.png"
import { addPlayer, removePlayer } from '../store/slice/playersSlice';

function PlayersList() {
    const players = useSelector(state => state.players);
    const dispatch = useDispatch();

    const [player, setPlayer] = useState("");
    const [score, setScore] = useState("");

    const [isEditable, setIsEditable] = useState(false);

    const pressButton = new Audio("../assets/audio/camera-button-press.mp3");
    const oldRadioButton = new Audio("../assets/audio/old-radio-button.mp3");

    const handleAdd = (e) => {
        e.preventDefault();
        pressButton.play();

        if (!player || !score) return;

        dispatch(addPlayer({ player, score }));
        setPlayer("");
        setScore("");
    }

    const handleRemoveOnlyThis = (id) => {
        let conf = confirm("Are you sure?");

        if (!conf) return;

        dispatch(removePlayer(id));
    }

    return (
        <div className='w-full min-h-screen bg-[#f1f1f1] flex flex-col items-center py-10 gap-15'>
            <form className='w-[400px] h-[500px] bg-white p-15 flex flex-col items-start justify-between'>
                <div className='w-full flex flex-col items-start gap-10'>
                    <label htmlFor="playerName" className='w-full flex gap-2'>
                        <img src={userAdmin} alt="User admin icon" width={30} />
                        <input
                            value={player}
                            onChange={(e) => setPlayer(e.target.value)}
                            className='w-full border-b outline-none pb-2'
                            type="text"
                            id='playerName'
                            placeholder="Enter player name..." />
                    </label>
                    <label htmlFor="playerScore" className='w-full flex gap-2'>
                        <img src={bookContent} alt="Book content icon" width={30} />
                        <input
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                            className='w-full border-b outline-none pb-2'
                            type="number"
                            id='playerScore'
                            placeholder="Enter player score..." />
                    </label>

                    <button
                        onClick={handleAdd}
                        className='bg-black text-white py-2 px-4 cursor-pointer'
                        type="button">
                        Add Player
                    </button>
                </div>
            </form>
            <div className='w-full flex items-center justify-end pr-20'>
                {
                    players.length === 1 ? (
                        <div className='w-full flex justify-end items-center'>
                            <button onClick={() => oldRadioButton.play()} className='bg-blue-400 text-white py-2 px-5 transition-bg duration-300 delay-150 ease-linear hover:bg-blue-500 cursor-pointer'>Clear player</button>
                        </div>
                    ) : players.length > 1 ? (
                        <div className='w-full flex justify-end items-center'>
                            <button onClick={() => oldRadioButton.play()} className='bg-blue-400 text-white py-2 px-5 transition-bg duration-300 delay-150 ease-linear hover:bg-blue-500 cursor-pointer'>Clear All</button>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
            <div className='w-full px-5 flex flex-wrap flex-1 justify-center items-center gap-5'>
                {
                    players.length > 0 && players.map((player, index) => {
                        return (
                            <div key={index} className='
                                    bg-white w-[30%] min-h-[200px] rounded-lg border-2 border-slate-200 p-5 
                                    flex flex-col items-start justify-start gap-10
                                '>
                                <div className='w-full flex flex-col items-center justify-center gap-5'>
                                    <h2 className='w-full flex items-center justify-between'>
                                        ID: <span className='font-bold'>{index + 1}</span>
                                    </h2>
                                    <h3 className='w-full flex items-center justify-between'>
                                        Player: <span className='font-bold'>{player.player}</span>
                                    </h3>
                                    <p className='w-full flex items-center justify-between'>
                                        Score:
                                        <input className={`font-bold text-end ${isEditable ? "outline" : "outline-none"}`} type="text" value={player.score} readOnly={!isEditable} />
                                    </p>
                                </div>
                                <div className='w-full flex items-center justify-end gap-2'>
                                    <button onClick={() => handleRemoveOnlyThis(player.id)} className='bg-indigo-600 text-white py-1 px-3 rounded-xl'>Remove</button>
                                    <button onClick={() => setIsEditable(prev => !prev)} className='bg-amber-900 text-white py-1 px-3 rounded-xl'>Update score</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default PlayersList