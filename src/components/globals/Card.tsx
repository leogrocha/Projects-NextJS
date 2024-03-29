interface CardProps {
    image: any,
    description: string,
}

const Card = (props: CardProps) => {
    return(
        <div className="flex justify-center items-center flex-col">
            <div className="border-2 border-black rounded-md hover:border-orange-400">
                <div className="w-32 h-32">
                    {props.image}
                </div>

                <div className={`
                w-32 h-28 flex justify-center items-center
                text-center bg-blue-200 font-bold
                `}>
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Card;