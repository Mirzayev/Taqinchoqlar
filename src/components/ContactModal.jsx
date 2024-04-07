import {useState} from "react";
import './contactModal.css'
const ContactModal = ({closeModal}) => {

 const [showInput, setShowInput] = useState(true)
    const [userName, setUserName] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userGender, setUserGender] = useState('')



function Change(){
     setShowInput(true)
}

    return (

                <div className='flex  justify-center   contactModal accent-[#50d71e]'>
                    <div className='fixed    h-full w-full  z-20 top-[20%]   left-[37%]'>
                        <div className=' w-[400px] relative my-3 leading-10 bg-slate-300 px-10 py-10 shadow-md shadow-black '>
                            <i onClick={closeModal}
                               className="fa-solid fa-circle-xmark absolute top-3 right-3 text-red-500 text-xl hover:text-red-600 duration-400"></i>

                            <input
                                className='w-full my-4 px-2 font-mono rounded outline-none shadow-black shadow-md '
                                type="text" placeholder='Enter you name' onChange={(e) => setUserName(e.target.value)}/><br/>
                            <input
                                className='w-full my-4 px-2 font-mono rounded outline-none shadow-black shadow-md '
                                type="email" placeholder='Enter you email'
                                onChange={(e) => setUserEmail(e.target.value)}/><br/>
                            <input
                                className='w-full my-4 px-2 font-mono rounded outline-none shadow-black shadow-md '
                                type="number" placeholder='Enter you number'
                                onChange={(e) => setUserNumber(e.target.value)}/><br/>

                            <form className='' action="" name='gender'>
                                <div
                                    className='flex justify-center gap-3 font-mono bg-slate-100 px-4 rounded shadow-black shadow-md my-4'>
                                    <span>Gender:</span>
                                    <span>Erkak</span> <input className='w-4' type="checkbox" name='gender'/>
                                    <span>Ayol</span> <input className='w-4' type="checkbox" name='gender'/></div>
                            </form>
                            <div className='flex justify-center mt-8'>
                                <button
                                    className='bg-green-400 text-white font-mono px-4 rounded-md hover:bg-green-600 duration-300 active:bg-green-700'>Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default ContactModal