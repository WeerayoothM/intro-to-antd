import React from "react";
// import logo from "./logo.svg";
import "../App.css";
import Calculator from "../components/Calculator";

function ContactPage() {
    return <div className="App" style={{ width: '100vw', height: '100vh', backgroundColor: '#222222', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Calculator />
    </div>;
}

export default ContactPage
