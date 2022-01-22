import { useEffect, useState } from "react";
import Button from "../globals/Button";
import Container from "../globals/Container";
import Input from "../globals/Input";
import {IconRefresh} from '../Icons/Index';
import Title from "../globals/Title";

const Main = () => {

    const [participantOne, setParticipantOne] = useState('');
    const [participantTwo, setParticipantTwo] = useState('');
    const [scoreParticipantOne, setScoreParticipantOne] = useState(0);
    const [scoreParticipantTwo, setScoreParticipantTwo] = useState(0);

    const clear = () => {
        setScoreParticipantOne(scoreParticipantOne - scoreParticipantOne);
        setScoreParticipantTwo(scoreParticipantTwo - scoreParticipantTwo);
    }

    return (
        <div className="bg-blue-300">
            <Container>
                <Title title="Truco Counter" />

                <div className="mt-5">
                    <Input
                        label="Inform your name:"
                        value={participantOne}
                        onChange={setParticipantOne}
                    />

                    <Input
                        label="Inform your name:"
                        value={participantTwo}
                        onChange={setParticipantTwo}
                    />
                </div>

                <div className="mt-5 flex justify-center items-center">
                    <div>
                        <Button
                            className="bg-white w-full font-bold"
                            onClick={() => setScoreParticipantOne(scoreParticipantOne + 1)}
                        >
                            <div>
                                {participantOne}
                            </div>
                            <div className="text-4xl">
                                {scoreParticipantOne}
                            </div>
                        </Button>
                        <div className="mt-2 flex justify-center items-center">
                            <Button
                                className="bg-red-400 font-bold"
                                onClick={() => setScoreParticipantOne(scoreParticipantOne - 1)}
                            >-</Button>
                            <div className="ml-2">
                                <Button
                                    className="bg-green-400 font-bold"
                                    onClick={() => setScoreParticipantOne(scoreParticipantOne + 1)}
                                >+</Button>
                            </div>
                            <div className="ml-2">
                                <Button
                                    className="bg-blue-400 font-bold"
                                    onClick={() => setScoreParticipantOne(scoreParticipantOne + 3)}
                                >3</Button>
                            </div>
                        </div>
                    </div>

                    <div className="ml-7">
                        <Button
                            className="bg-white w-full font-bold"
                            onClick={() => setScoreParticipantTwo(scoreParticipantTwo + 1)}
                        >
                            <div>
                                {participantTwo}
                            </div>
                            <div className="text-4xl">
                                {scoreParticipantTwo}
                            </div>
                        </Button>
                        <div className="mt-2 flex justify-center items-center">
                            <Button
                                className="bg-red-400 font-bold"
                                onClick={() => setScoreParticipantTwo(scoreParticipantTwo - 1)}
                            >-</Button>
                            <div className="ml-2">
                                <Button
                                    className="bg-green-400 font-bold"
                                    onClick={() => setScoreParticipantTwo(scoreParticipantTwo + 1)}
                                >+</Button>
                            </div>
                            <div className="ml-2">
                                <Button
                                    className="bg-blue-400 font-bold"
                                    onClick={() => setScoreParticipantTwo(scoreParticipantTwo + 3)}
                                >3</Button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center mt-7">
                    <Button
                    className="bg-orange-400"
                    onClick={clear}
                    >
                        {IconRefresh}
                    </Button>
                </div>


            </Container>
        </div>
    )
}

export default Main;