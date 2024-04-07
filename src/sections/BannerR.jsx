import  './Header.css'
import sponsor from '../assets/Sponsor.png'


  const BannerR = () => {


     return(
         <div className='relative '>
         <div className='header'>
            <div className='w-[80%] m-auto'>

                <div className='absolute bottom-0'>
                    <div className=' text-white font-semibold items-end relative '>
                    <h2 className=' flex justify-center  text-[36px] text-center '>Долго, дорого, богато!</h2>
                    <div className='flex justify-center'>
                        <button className='btn '>каталог изделий</button>
                    </div>
                    <hr className='absolute z-10 bottom-[-40px] left-0 w-full pho:hidden md:flex'/>
                </div>
                    <div className='my-20  justify-between text-center flex-wrap gap-2 pho:hidden md:flex'>
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

  export default BannerR