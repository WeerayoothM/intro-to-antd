import React, { useState } from 'react'
import { Typography, Button, Col, Divider, Input, List, Row } from "antd";

function Calculator() {
    const [result, setResult] = useState(0)
    const [numDisplay, setNumDisplay] = useState("0")
    const [previousInput, setPreviousInput] = useState("0")
    const [previousOperator, setPreviousOperator] = useState(null)
    const [isShowResult, setIsShowResult] = useState(false)

    const operator = {
        add: function (num1, num2) { return parseFloat(num1) + parseFloat(num2) },
        subtract: function (num1, num2) { return parseFloat(num1) - parseFloat(num2) },
        multiple: function (num1, num2) { return parseFloat(num1) * parseFloat(num2) },
        divide: function (num1, num2) { return parseFloat(num1) / parseFloat(num2) },
    }
    const doSomething = (value) => {
        switch (value) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                let newNumDisplay = numDisplay === "0" ? "" : numDisplay;
                newNumDisplay += value
                setNumDisplay(newNumDisplay)
                return
            case "+":
                const resultAdd = previousOperator ? operator[previousOperator](previousInput, numDisplay) : operator["add"](previousInput, numDisplay);
                if (previousOperator) setResult(resultAdd);
                setPreviousOperator("add");
                setPreviousInput(resultAdd)
                setNumDisplay("0")
                return
            case "-":
                const resultSubtract = previousOperator ? operator[previousOperator](previousInput, numDisplay) : operator["subtract"](previousInput, numDisplay);
                if (previousOperator) setResult(resultSubtract);
                setPreviousOperator("subtract");
                setPreviousInput(resultSubtract)
                setNumDisplay("0")
                return
            case "*":
                const resultMultiple = previousOperator ? operator[previousOperator](previousInput, numDisplay) : operator["multiple"]("1", numDisplay);
                if (previousOperator) setResult(resultMultiple);
                setPreviousOperator("multiple")
                setPreviousInput(resultMultiple)
                setNumDisplay("0")
                return

            case "/":
                const resultDivide = previousOperator ? operator[previousOperator](previousInput, numDisplay) : operator["divide"](numDisplay, "1");
                if (previousOperator) setResult(resultDivide);
                setPreviousOperator("divide")
                setPreviousInput(resultDivide)
                setNumDisplay("0")
                return
            case "=":
                if (previousOperator) {
                    const newResult = operator[previousOperator](previousInput, numDisplay);
                    setResult(newResult);
                    setPreviousInput(newResult)
                    setIsShowResult(true);
                    setNumDisplay("0")
                    return
                }
                setResult(numDisplay);
                setIsShowResult(true);
                return
            case "AC":
                setResult(0)
                setNumDisplay("0")
                setPreviousInput("0")
                setPreviousOperator(null)
                setIsShowResult(false)
                return
            case ".":
                if (numDisplay.includes('.')) return;
                return setNumDisplay(prevValue => prevValue + ".")
            case "%":
                // const resultDivide = previousOperator ? operator[previousOperator](previousInput, numDisplay) : operator["divide"](numDisplay, "1");
                if (numDisplay) {
                    let percentValue = parseFloat(numDisplay) / 100
                    setNumDisplay(percentValue.toString())
                    return
                }
            case "+/-":
                if (numDisplay) {
                    let negativeValue = parseFloat(numDisplay) >= 0 ? "-" + numDisplay : numDisplay.slice(1);
                    setNumDisplay(negativeValue)
                    return
                }
        }
    }
    const buttonStyle = { margin: '1px', width: '70px' }

    return (
        <>
            <Row justify='center'>
                <div className='display'>
                    <div style={{ color: '#944317', fontSize: '2rem' }}><span>{numDisplay}</span></div>
                    {isShowResult && <div style={{ borderTop: "solid #aaaaaa 1px", color: 'salmon', fontSize: '2rem' }}><span>{result}</span></div>}
                </div>
            </Row>
            <Row justify='center'>
                <Col>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('AC')} style={buttonStyle} type="primary" size="middle">AC</Button></Col>
                        <Col ><Button onClick={() => doSomething('+/-')} style={buttonStyle} type="primary" size="middle">{'+/-'}</Button></Col>
                        <Col ><Button onClick={() => doSomething('%')} style={buttonStyle} type="primary" size="middle">%</Button></Col>
                        <Col ><Button onClick={() => doSomething('/')} style={buttonStyle} type="primary" size="middle">{'/'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('7')} style={buttonStyle} type="primary" size="middle">7</Button></Col>
                        <Col ><Button onClick={() => doSomething('8')} style={buttonStyle} type="primary" size="middle">8</Button></Col>
                        <Col ><Button onClick={() => doSomething('9')} style={buttonStyle} type="primary" size="middle">9</Button></Col>
                        <Col ><Button onClick={() => doSomething('*')} style={buttonStyle} type="primary" size="middle">{'x'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('4')} style={buttonStyle} type="primary" size="middle">4</Button></Col>
                        <Col ><Button onClick={() => doSomething('5')} style={buttonStyle} type="primary" size="middle">5</Button></Col>
                        <Col ><Button onClick={() => doSomething('6')} style={buttonStyle} type="primary" size="middle">6</Button></Col>
                        <Col ><Button onClick={() => doSomething('-')} style={buttonStyle} type="primary" size="middle">{'-'}</Button></Col>
                    </Row>
                    <Row justify="center">
                        <Col ><Button onClick={() => doSomething('1')} style={buttonStyle} type="primary" size="middle">1</Button></Col>
                        <Col ><Button onClick={() => doSomething('2')} style={buttonStyle} type="primary" size="middle">2</Button></Col>
                        <Col ><Button onClick={() => doSomething('3')} style={buttonStyle} type="primary" size="middle">3</Button></Col>
                        <Col ><Button onClick={() => doSomething('+')} style={buttonStyle} type="primary" size="middle">{'+'}</Button></Col>
                    </Row>
                    <Row justify="center" style={{ width: "100%" }}>
                        <Col ><Button onClick={() => doSomething('0')} style={{ margin: '1px', width: '142px' }} type="primary" size="middle">0</Button></Col>
                        <Col ><Button onClick={() => doSomething('.')} style={buttonStyle} type="primary" size="middle">.</Button></Col>
                        <Col ><Button onClick={() => doSomething('=')} style={buttonStyle} type="primary" size="middle">{'='}</Button></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Calculator
