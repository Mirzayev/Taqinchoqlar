import img_1 from '../assets/image_1.png'
import img_2 from '../assets/image_2.png'
import img_3 from '../assets/image_3.png'
import img_4 from '../assets/image_4.png'
import img_5 from '../assets/image_5.png'
import img_6 from '../assets/image_6.png'
import {NavLink, Outlet} from "react-router-dom";

import {useState} from "react";
import {Button} from "antd";

const ProductR = () => {

    const [product, setProduct] = useState(
        [
            {
                id: 1,
                image: img_1,
                text: 'Кольца'
            },
            {
                id: 2,
                image: img_2,
                text: 'серьги'
            },
            {
                id: 3,
                image: img_3,
                text: 'подвески'
            },
            {
                id: 4,
                image: img_4,
                text: 'запонки'
            },
            {
                id: 5,
                image: img_5,
                text: 'браслеты'
            },
            {
                id: 6,
                image: img_6,
                text: 'часы'
            },
        ]
    )


    return (
        <div>
            <div>
                <div className='w-[80%] m-auto'>
                    <h2 className=' mt-8 flex justify-center '>К мероприятиям</h2>
                    <h1 className=' mb-10 flex justify-center text-[30px] font-semibold text-center'>Настоящая красота
                        здесь!</h1>
                    <div className='md:flex pho:justify-center text-center  md:justify-between flex-wrap gap-4'>
                        <Button className='uppercase  shadow-lg px-10 my-2 py-[6px] h-full bg-black  text-white'>Свадьба</Button>
                        <Button className='uppercase  shadow-lg px-10   my-2 py-[6px] h-full  '>МУЖУ</Button>
                        <Button className='uppercase  shadow-lg px-10   my-2 py-[6px] h-full  '>жене</Button>
                        <Button className='uppercase  shadow-lg px-10   my-2 py-[6px] h-full  '>партнеру</Button>
                        <Button className='uppercase  shadow-lg px-10   my-2 py-[6px] h-full  '>коллекции</Button>
                        <Button className='uppercase  shadow-lg px-10   my-2 py-[6px] h-full  '>редкость</Button>
                    </div>

                    <div className='grid  lg:grid-cols-3 sm:grid-cols-2 my-8 gap-10'>
                        {product.map((items) => {
                            return (

                                <div className=' relative cursor-pointer flex justify-center group' key={items.id}>

                                    <img className=' w-full' src={items.image} alt=""/>
                                    <div className={"absolute bottom-0  z-30 bg-blue-500 w-full text-center py-4 group-hover:block hidden "}>
                                        <Button className={" bg-transparent outline-none text-white px-10"}>Add to cart</Button></div>
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