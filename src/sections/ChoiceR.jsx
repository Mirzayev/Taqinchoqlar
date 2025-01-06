import {Button} from "antd";


const ChoiceR = () => {

    return(
        <div className='bg-black max-w-[1920px] '>
            <div className='text-white  '>
                <div className='w-[80%] m-auto '>
                    <p className='flex justify-center pt-20 text-[18px] text-center'>Не знаете, что выбрать?</p>
                    <h2 className='flex justify-center font-semibold  text-[30px] text-center'>Посетите наши салоны в Москве</h2>
                    <div className='flex justify-center text-center '>
                        <p className='w-[730px] text-[18px] my-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas
                            quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim.
                            Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus.
                            Pharetra lorem sem purus nisi libero viverra ipsum.
                        </p>
                    </div>
                    <div className='flex justify-center py-10'>
                        <Button className={"px-10 py-2 h-full"}>наши салоны</Button>
                    </div>
                </div>
            </div>
        </div>
    )
  }

   export  default  ChoiceR
