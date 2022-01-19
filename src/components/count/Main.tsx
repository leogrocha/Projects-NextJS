import { useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Title from "../globals/Title";

const Main = () => {
    
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }
    
    
    return(
        <div className="bg-gradient-to-r from-blue-300 to-orange-200">
            <Container>
                <Title title="Count"/>

                <div className="flex mt-5">
                    <Button
                    className="bg-red-400 text-white text-2xl"
                    onClick={dec}
                    >-</Button>
                    
                    <div className="ml-5">
                    <Button
                    className="bg-green-400 text-white text-2xl"
                    onClick={inc}
                    >+</Button>
                    </div>
                </div>

                <div className={`
                flex justify-center items-center mt-5 text-3xl
                ${count > 0 ? 'text-green-600' : 'text-red-600'}
                `}>
                    {count}
                </div>
            </Container>
        </div>
    )
}

export default Main;