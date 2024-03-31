

  const NewsletterR = ( ) => {

    return(
        <div className='bg-black pb-[120px] mt-[150px]'>
<div>
    <div className='text-white pt-[100px]'>
        <h5 className='flex justify-center text-[21px] text-center my-4'>Полезные советы и персональный предложения</h5>
        <h4 className='flex justify-center font-bold text-[30px] text-center'>Эксклюзивная рассылка</h4>

        <div className='lg:flex justify-center gap-20 items-start mt-[74px] '>
            <div className='px-[15px] '>
                <div className='flex gap-5 items-center'>
                    <i className="fa-solid fa-play"></i>
                    <p>Личный менеджер</p>
                </div>
                <div className='flex gap-5 items-center my-[7.5px]'>
                    <i className="fa-solid fa-play"></i>
                    <p>Доставка и оформление</p>
                </div>
                <div className='flex gap-5 items-center my-[7.5px]'>
                    <i className="fa-solid fa-play"></i>
                    <p>Индивидуальный дизайн</p>
                </div>
            </div>

            <div className='border-2 border-white px-[10px] py-[14px] pho:mt-8 ipad:mt-0'>
                <div className='bg-slate-300 flex items-center sm:gap-4 py-3 md:px-[22px] '>
                    <input className='md:px-[35px] md:py-[14px] outline-none text-black  pho:px-1  ml-6 pho:py-2' type="text" placeholder='Ваш e-mail'/>
                    <button className='text-center bg-black text-white md:px-[35px] md:py-[14px] pho:px-6 ml-6 pho:py-2 active:shadow-buttonShadow '>отправить</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
  }

  export default NewsletterR