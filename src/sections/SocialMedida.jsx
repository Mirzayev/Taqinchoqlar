import img_1 from '../assets/image_10.png'
import img_2 from '../assets/image_11.png'
import img_3 from '../assets/image_12.png'
import img_4 from '../assets/image_13.png'
import img_5 from '../assets/image_14.png'
import img_6 from '../assets/image_15.png'



const SocialMedida = () => {


     return(
         <div className='max-w-[1920px]'>
           <div className='w-[80%] m-auto'>
               <div>
                   <h4 className='flex justify-center text-[21px] md:mt-[120px]'>#ojjo_jewerly</h4>
                   <h3 className='flex justify-center mt-[15px] md:mb-[60px] pho:mb-4 font-bold text-[30px] text-center'>Мы в социальных сетях</h3>

                   <div className=''>
                       <div className='grid grid-cols-4 '>
                           <img className='w-full grid col-span-2 img_1' src={img_1} alt=""/>
                           <img className='w-full grid grid-cols-1 img_2' src={img_2} alt=""/>
                           <img className='w-full img_2' src={img_3} alt=""/>
                       </div>
                       <div className='grid grid-cols-4'>
                           <img className='w-full img_4' src={img_4} alt=""/>
                           <img className='w-full img_5' src={img_5} alt=""/>
                           <img className='w-full img_6 col-span-2' src={img_6} alt=""/>
                       </div>
                   </div>
               </div>
           </div>
         </div>
     )
}

export default SocialMedida