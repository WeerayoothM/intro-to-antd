import { Button } from "antd";
import React from "react";
// import logo from "./logo.svg";
import "../App.css";
import Calculator from "../components/Calculator";

function CalculatorPage() {
    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#222222' }}>
                <Button type="link" href="/" style={{ fontSize: '1rem', margin: "10px" }}>Home</Button>
            </nav>
            <div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: '#222222', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <Calculator />
            </div>
        </>
    )

}

export default CalculatorPage
