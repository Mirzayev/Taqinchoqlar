import img_7 from '../assets/image_7.png'
import img_8 from '../assets/image_8.png'
import img_9 from '../assets/image_9.png'
import {useState} from "react";


const GiftR = () => {

    const [gift, setGift] = useState([
        {
            id:1,
            image: img_7,
            text: 'Как выбрать часы для своей  будущей жены'
        },
        {
            id:2,
            image: img_8,
            text: 'Как выбрать часы для своей  будущей жены'
        },
        {
            id:3,
            image: img_9,
            text: 'Как выбрать часы для своей  будущей жены'
        }
    ])

    return(
        <div>
<div>
    <div className='w-[80%] m-auto '>
        <p className='flex justify-center mt-40 text-center'>Полезные статьи</p>
        <p className='font-semibold flex justify-center text-[30px] mt-4 mb-20 text-center'>Лучшие советы по подбору дорогих подарков</p>

       <div className='flex xl:justify-between flex-wrap gap-4 pho:justify-center'>
           {gift.map((event) => {
               return(
                   <div className='flex justify-center '>
                       <div key={event.id} className='relative '>
                           <img className='w-full' src={event.image} alt=""/>
                           <div className='flex justify-center'><span className='absolute bottom-10 text-white w-[130px] text-center'>{event.text}</span></div>
                       </div>
                   </div>
               )
           })
           }
       </div>
        <div className='flex justify-center my-10'>
            <button className='bg-black text-white uppercase px-6 py-1'>читать наш блог</button>
        </div>
    </div>
</div>
        </div>
    )
   }

   export default  GiftR