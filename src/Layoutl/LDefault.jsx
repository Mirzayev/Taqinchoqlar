// import Header from "../components/Header.jsx";
import Footer from "../sections/FooterR.jsx";
import {NavLink, Outlet} from "react-router-dom";
import logo from "../assets/logo.png";
import Lottie from "lottie-react";
import userIcon from '../animations/user_icon.json'
import heardIcon from '../animations/heard_icon.json'
import searchIcon from '../animations/searchIcon.json'
import jobIcon from '../animations/jobIcon.json'
import darkMode from '../animations/darkMode.json'
import ContactModal from "../components/ContactModal.jsx";
import {useState} from "react";

const LDefault = () => {

    const [modal, setModal] = useState(false)

    const closeModal = () => {
    setModal(false)
    }

    return (
        <div className="All min-h-screen flex flex-col justify-between ">

            <div className='bg-gray-800'>
                <div
                    className=' flex justify-center gap-10 lg:gap-20 xl:gap-40 flex-wrap  items-center text-white py-4'>
                    <div className='lg:flex gap-4 pho:hidden '>

                        <NavLink to={"/"} className=' hover:text-slate-400 duration-200'>Контрагентам</NavLink>
                        <NavLink to={"https://designs.ai/"}
                                 className='hover:text-slate-400 duration-200'>Дизайнерам</NavLink>
                        <NavLink to={"/job"} className='hover:text-slate-400 duration-200 flex gap-1'>
                            <Lottie className='w-5' animationData={jobIcon}></Lottie>
                            Вакансии</NavLink>

                    </div>
                    <div>
                        <img src={logo} alt=""/>
                    </div>


                    <div className=' items-center gap-8 pho:hidden lg:flex'>

                        <NavLink to={"/search"} className='flex items-center gap-3 cursor-pointer group'>
                            <div className='bg-slate-700 flex items-center px-3 rounded-md'>
                                <Lottie className='flex w-8' animationData={searchIcon}></Lottie>
                                <p className=' group-hover:text-slate-400 duration-100'>Поиск</p>
                            </div>
                        </NavLink>

                        <div onClick={()=> setModal(true)} className='flex contact group'>
                            <Lottie className='w-7' animationData={userIcon}></Lottie><p className='group-hover:text-gray-400'>Вход/Регистрация</p>
                        </div>

                        <div className='flex items-center  '>

                            <NavLink className='w-12'>
                                <Lottie animationData={heardIcon}></Lottie>
                            </NavLink>
                            <Lottie className='w-14 hover:cursor-pointer block' animationData={darkMode}></Lottie>

                        </div>
                    </div>

                    <div className='pho:flex gap-3 lg:hidden  items-center'>
                        <i className="fa-solid fa-bars text-2xl"></i>
                        <Lottie className='w-14 hover:cursor-pointer pho:block lg:hidden'
                                animationData={darkMode}></Lottie>
                    </div>
                </div>

            </div>
            {modal && <div>
                <ContactModal modal={modal} closeModal={closeModal}/>
            </div>}
            <div>

                <div><Outlet/></div>
            </div>
            <Footer/>
        </div>
    )
}

export default LDefault