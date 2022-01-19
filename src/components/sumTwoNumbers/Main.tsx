import { useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Input from "../globals/Input";
import Title from "../globals/Title";

const Main = () => {

    const [numberOne, setNumberOne] = useState(null);
    const [numberTwo, setNumberTwo] = useState(null);
    const [sum, setSum] = useState(0);

    const result = () => {
        setSum(((+numberOne) + (+numberTwo)));
    }

    return (
        <div className="bg-gradient-to-r to-purple-300 from-orange-200">
            <Container>
                <Title title="Sum Two Numbers" />

                <div className="mt-5">
                    <Input
                        label="Number One:"
                        value={numberOne}
                        onChange={setNumberOne}
                    />

                    <Input
                        label="Number Two:"
                        value={numberTwo}
                        onChange={setNumberTwo}
                    />
                </div>

                <div className="flex justify-center items-center mt-5">
                    <Button
                    className="bg-blue-400"
                    onClick={result}
                    >Sum</Button>
                </div>

                <div className="flex justify-center items-center mt-5 text-3xl">
                    {sum}
                </div>
            </Container>
        </div>
    )
}

export default Main;