import { useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Input from "../globals/Input";
import Title from "../globals/Title";

const Main = () => {

    const [number, setNumber] = useState(null);
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(((+number) + (+count)));
    }

    const dec = () => {
        setCount(((+count) - (+number)));
    }

    return (
        <div>
            <Container>
                <Title title="Count Value Specif" />

                <div className="mt-5">
                    <Input
                        label="Number"
                        value={number}
                        onChange={setNumber}
                    />
                </div>

                <div className="flex justify-center items-center">
                    <Button
                        className="bg-red-400"
                        onClick={dec}
                    >-</Button>

                    <div className="ml-5">
                        <Button
                            className="bg-green-400"
                            onClick={inc}
                        >+</Button>
                    </div>
                </div>

                <div className={`
                flex justify-center items-center text-3xl mt-5
                ${count > 0 ? 'text-green-600' : 'text-red-600'}
                `}>
                    {count}
                </div>
            </Container>
        </div>
    )
}

export default Main;