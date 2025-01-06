import {useState} from "react";
import {Button} from "antd";

const Search = () => {
    return (
        <div className='bg-slate-700 max-h-[60vh] py-10 flex justify-center items-center'>
            <div className='md:w-[80%] m-auto px-4'>
            <div className='flex items-center bg-white lg:py-5 py-2 lg:px-10 px-2 w-full rounded-lg'>
                <div className='flex items-center w-full  px-4'>
                    <input className='w-full py-2 outline-none rounded-l-md ' type="text" placeholder="Что Вы ищете?"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Button className='bg-green-400 text-white px-8 py-2 hover:bg-green-500 duration-300 rounded-r-md active:bg-green-600'>Search</Button>
            </div>
            </div>
        </div>
    )
}

export default Search