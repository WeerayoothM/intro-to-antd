import { Button } from 'antd'
import React from 'react'
import TodoListHook from '../components/TodoListHook'

function TodoListPage() {
    return (
        <div >
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="link" href="/" style={{ fontSize: '1rem', margin: "10px" }}>Home</Button>
            </nav>
            <TodoListHook />
        </div>
    )
}

export default TodoListPage
