import {useState} from "react";

const Search = () => {
    return (
        <div className='bg-slate-700 min-h-[60vh] flex justify-center items-center'>
            <div className='w-[80%] m-auto'>
            <div className='flex items-center bg-white py-5 px-10 w-full rounded-lg'>
                <div className='flex items-center w-full border px-4'>
                    <input className='w-full py-2 outline-0 rounded-l-md' type="text" placeholder="Что Вы ищете?"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <button className='bg-green-400 text-white px-8 py-2 hover:bg-green-500 duration-300 rounded-r-md active:bg-green-600'>Search</button>
            </div>
            </div>
        </div>
    )
}

export default Search