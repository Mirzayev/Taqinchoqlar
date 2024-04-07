import Lottie from "lottie-react";
import blockIcon from '../animations/blockIcon.json'
const Work = () => {

    return (
        <div className='h-screen bg-slate-100 flex justify-center'>
            <h2 className='flex   items-center  text-[45px] font-mono gap-3 text-red-400'>Вакансий не найдено
            <Lottie animationData={blockIcon}></Lottie>
            </h2>
        </div>
    )
}


export default Work