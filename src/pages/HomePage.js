import { Button } from 'antd'
import React from 'react'

function HomePage() {
    return (
        <div className="App-header" >
            <h1 style={{ color: 'goldenrod' }}>My App</h1>
            <Button type="link" href="/todolist" style={{ fontSize: '2rem', margin: "10px" }}>Todolist</Button>
            <Button type="link" href="/calculator" style={{ fontSize: '2rem', margin: "10px" }}>Calculator</Button>
            <Button type="link" href="/dicegame" style={{ fontSize: '2rem', margin: "10px" }}>Dicegame</Button>
        </div>
    )
}

export default HomePage
