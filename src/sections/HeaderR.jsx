import  './Header.css'
import logo from '../assets/logo.png'
import sponsor from '../assets/Sponsor.png'
  const HeaderR = () => {


     return(
         <div className='relative'>
         <div className='header'>
            <div className='w-[80%] m-auto'>
                <div className='flex justify-center gap-10 lg:gap-20 xl:gap-40 flex-wrap  items-center text-white py-4'>
                    <div className='lg:flex gap-4 pho:hidden '>
                        <p className='hover:text-slate-400 duration-200'>Контрагентам</p>
                        <p className='hover:text-slate-400 duration-200'>Дизайнерам</p>
                        <p className='hover:text-slate-400 duration-200'>Вакансии</p>
                    </div>
                    <div>
                        <img src={logo} alt=""/>
                    </div>


                    <div className=' items-center gap-8 pho:hidden lg:flex'>

                        <div className='flex items-center gap-3 cursor-pointer group'>
                            <i className="fa-solid fa-magnifying-glass group-hover:text-slate-400 duration-200"></i>
                            <p className=' group-hover:text-slate-400 duration-100'>Поиск</p>
                        </div>
                        <div className='flex '>
                            <p className='hover:text-slate-400 duration-200'>Вход/Регистрация</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <i className="fa-regular fa-user  hover:text-slate-400 duration-200"></i>
                            <i className="fa-regular fa-heart hover:text-slate-400 duration-200"></i>
                        </div>
                    </div>

                    <div className='pho:block lg:hidden'>
                        <i className="fa-solid fa-bars text-2xl"></i>
                    </div>
                </div>

                <div className='sm:mt-[300px] pho:mt-[200px]'>
                    <div className='text-white font-semibold items-end'>
                    <h2 className='flex justify-center  text-[36px] text-center'>Долго, дорого, богато!</h2>
                    <div className='flex justify-center'>
                        <button className='text-[18px] border-[1px] border-white px-6 py-2 my-3 hover:bg-slate-800 duration-200'>каталог изделий</button>
                    </div>
                    <hr className='absolute z-10 bottom-[20%] left-0 w-full pho:hidden md:flex'/>
                </div>
                    <div className='my-20  justify-between flex-wrap gap-2 pho:hidden md:flex'>
                        <img className='border-r-2 px-4' src={sponsor} alt=""/>
                        <img className='border-r-2 px-4' src={sponsor} alt=""/>
                        <img className='border-r-2 px-4' src={sponsor} alt=""/>
                        <img className='border-r-2 px-4' src={sponsor} alt=""/>
                        <img className='border-r-2 px-4' src={sponsor} alt=""/>
                        <img src={sponsor} alt=""/>
                    </div>
                </div>
            </div>
         </div>
         </div>
     )
  }

  export default HeaderR