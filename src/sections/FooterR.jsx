import sponsor_visa from '../assets/Visa_card.png'
import sponsor_master from '../assets/Master_card.png'


   const FooterR = () => {

    return(
        <div className=''>
            <div className='w-[80%] m-auto'>
                <div className='mt-20 grid xl:grid-cols-4 gap-[18px] pho:grid-cols-1 md:grid-cols-2' >
                    <div>
                        <h5 className='text-[18px] font-medium mb-2.5 uppercase '>Полезные ссылки</h5>
                        <hr className='w-full   pb-[30px]'/>
                        <p className='py-[7.5px] font-mono hover:text-green-400 duration-200'>Доставка</p>
                        <p className='py-[7.5px] font-mono hover:text-green-400 duration-200'>Оплата </p>
                        <p className='py-[7.5px] font-mono hover:text-green-400 duration-200'>Акции</p>
                        <p className='py-[7.5px] font-mono hover:text-green-400 duration-200'>Политика конфиденциальности</p>
                    </div>
                    <div >
                        <h5 className='text-[18px] font-medium mb-2.5 uppercase '>оплата</h5>
                        <hr className='  pb-[30px]'/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className='flex items-center py-[21px] gap-4'>
                            <img src={sponsor_visa} alt=""/>
                            <img src={sponsor_master} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-[18px] font-medium mb-2.5 uppercase'>контакты</h5>
                        <hr className='h-[22px]  pb-[30px]'/>
                        <div className='flex items-center gap-4 py-[7.5px]'>
                            <i className="fa-solid fa-square-phone text-[20px] hover:text-green-400 duration-200"></i>
                            <p>8 (812) 234-56-55</p>
                        </div>

                        <div className='flex items-center gap-4 py-[7.5px]'>
                            <i className="fa-solid fa-square-phone text-[20px] hover:text-green-400 duration-200"></i>
                            <p>8 (812) 234-56-55</p>
                        </div>

                        <div className='flex items-center gap-4 py-[7.5px]'>
                            <i className="fa-solid fa-envelope text-[20px] hover:text-green-400 duration-200"></i>
                            <p>ojjo@ojjo.ru</p>
                        </div>
                    </div>
                    <div>
                        <h5  className='text-[18px] font-medium mb-2.5 uppercase'>социальные сети</h5>
                        <hr className='h-[22px]  pb-[30px]'/>
                        <p className=' pb-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className='flex gap-4 mb-8'>
                            <i className="fa-brands fa-youtube text-[22px] hover:text-green-400 duration-200"></i>
                            <i className="fa-brands fa-vk text-[22px] hover:text-green-400 duration-200"></i>
                            <i className="fa-brands fa-facebook text-[22px] hover:text-green-400 duration-200"></i>
                            <i className="fa-brands fa-telegram text-[22px] hover:text-green-400 duration-200"></i>
                            <i className="fa-solid fa-e text-[22px] hover:text-green-400 duration-200"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
   }

export default FooterR