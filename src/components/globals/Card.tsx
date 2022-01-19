import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import Count from '../../public/count.png';
import Button from './Button';

interface CardProps {
    image: any,
    description: string,
    link: any,
}

const Card = (props: CardProps) => {
    return(
        <div className="flex justify-center items-center flex-col">
            <div className="border-2 border-black rounded-md ">
                <div className="border-2 w-32 h-32">
                    {props.image}
                </div>

                <div className={`
                border-2  w-32 h-28 flex justify-center items-center
                text-center bg-blue-200
                `}>
                    <p>{props.description}</p>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                    {props.link}
            </div>
        </div>
    )
}

export default Card;