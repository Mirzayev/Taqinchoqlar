import img_1 from '../assets/image_1.png'
import img_2 from '../assets/image_2.png'
import img_3 from '../assets/image_3.png'
import img_4 from '../assets/image_4.png'
import img_5 from '../assets/image_5.png'
import img_6 from '../assets/image_6.png'
import {NavLink, Outlet} from "react-router-dom";

import {useState} from "react";

const ProductR = () => {

    const [product, setProduct]  = useState(
        [
            {
                id:1,
                image: img_1,
                text: 'Кольца'
            },
            {
                id:2,
                image: img_2,
                text: 'серьги'
            },
            {
                id:3,
                image: img_3,
                text: 'подвески'
            },
            {
                id:4,
                image: img_4,
                text: 'запонки'
            },
            {
                id:5,
                image: img_5,
                text: 'браслеты'
            },
            {
                id:6,
                image: img_6,
                text: 'часы'
            },
        ]
    )



    return(
        <div>
         <div>
            <div className='w-[80%] m-auto'>
                <h2 className=' mt-8 flex justify-center '>К мероприятиям</h2>
                <h1 className=' mb-10 flex justify-center text-[30px] font-semibold text-center'>Настоящая красота здесь!</h1>
                <div className='md:flex pho:justify-center text-center  md:justify-between flex-wrap gap-4'>
                    <p  className='uppercase border-2 shadow-md px-6 my-2 py-1 bg-black text-white hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>Свадьба</p>
                    <p className='uppercase border-2 shadow-md px-6   my-2 py-1 hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>МУЖУ</p>
                    <p className='uppercase border-2 shadow-md px-6   my-2 py-1 hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>жене</p>
                    <p className='uppercase border-2 shadow-md px-6   my-2 py-1 hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>партнеру</p>
                    <p className='uppercase border-2 shadow-md px-6   my-2 py-1 hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>коллекции</p>
                    <p className='uppercase border-2 shadow-md px-6   my-2 py-1 hover:bg-slate-600 hover:text-white duration-200 active:bg-slate-600 '>редкость</p>
                </div>

              <div className='grid  lg:grid-cols-3 sm:grid-cols-2 my-8 gap-10'>
                  {product.map((items) =>{
                      return(

                          <div className=' relative cursor-pointer flex justify-center'  key={items.id}>

                                  <img className=' w-full' src={items.image} alt=""/>
                                  <p className=' z-20 absolute bottom-6 text-white uppercase'>{items.text}</p>

                          </div>
                      )
                  })
                  }

              </div>

            </div>
         </div>
        </div>
    )
 }

 export default ProductR