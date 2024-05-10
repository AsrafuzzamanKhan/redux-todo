import React, { useState } from 'react';
import noteImg from '../assets/images/notes.png';
import doubleTick from '../assets/images/double-tick.png';
import plusImg from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';
export default function Header() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const handleInput = e => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input))
    setInput("")
  }
  const completeAll = () => {
    dispatch(allCompleted())
  }
  const deleteAll = () => {
    dispatch(clearCompleted())
  }

  return (

    <div>
      <form onSubmit={submitHandler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={handleInput}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain bg-slate-950`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={completeAll} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={deleteAll} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>

  );
}
