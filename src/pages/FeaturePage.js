//* Dice Game using hooks
import React, { Fragment, useState } from 'react';

import '../App.css'
import Header from '../components/Header';
import ScoreCard from '../components/ScoreCard';
import DiceCard from '../components/DiceCard';
import { Button } from 'antd';

function DiceGamePage() {
    const [playerScore, setPlayerScore] = useState([0, 0]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [diceScore, setDiceScore] = useState(0);
    const [roundScore, setRoundScore] = useState(0);

    const roll = () => {
        const newDiceScore = Math.floor(Math.random() * 6) + 1;
        setDiceScore(newDiceScore)
        if (newDiceScore === 1) {
            setCurrentPlayer(currentValue => currentValue === 1 ? 0 : 1);
            setRoundScore(0)
        } else {
            setRoundScore(currentValue => currentValue + newDiceScore)
        }
    };

    const keep = () => {
        // const newPlayerScore = [...playerScore];
        // newPlayerScore[currentPlayer] += roundScore;
        // setPlayerScore(newPlayerScore)
        setPlayerScore(currentValue => currentValue.map((elem, idx) => idx === currentPlayer ? elem + roundScore : elem))
        setCurrentPlayer(currentValue => currentValue === 1 ? 0 : 1);
        setRoundScore(0)
        setDiceScore(0)
    }

    const resetGame = () => {
        setCurrentPlayer(0)
        setPlayerScore([0, 0])
        setRoundScore(0)
        setDiceScore(0)
    }

    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="link" href="/" style={{ fontSize: '1rem', margin: "10px" }}>Home</Button>
            </nav>
            <Header resetGame={resetGame} playerScore={playerScore} />
            <div className="container">
                <ScoreCard name='1' score={playerScore[0]} active={currentPlayer === 0 ? true : false} />
                <DiceCard roll={roll} keep={keep} roundScore={roundScore} diceScore={diceScore} />
                <ScoreCard name='2' score={playerScore[1]} active={currentPlayer === 1 ? true : false} />
            </div>

        </>
    );
}

export default DiceGamePage
