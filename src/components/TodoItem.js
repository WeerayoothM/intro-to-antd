import { Button, Col, Input, Row } from 'antd'
import React, { useState } from 'react'

function TodoItem(props) {
    const [inputValue, setInputValue] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const { editTodoItem, deleteTodoItem, todo } = props
    return (
        <>
            <Row style={{ width: "100%" }}>
                <Col span={16}>
                    {!isEdit && <Row justify="start">{todo.task}</Row>}
                    {isEdit && <Input value={inputValue} onChange={(e) => { editTodoItem(todo.id, e.target.value); setInputValue(e.target.value) }} />}

                </Col>
                <Col span={8} style={{ width: "100%", display: 'flex', justifyContent: 'flex-end' }} >
                    {!isEdit && <Button onClick={() => { setInputValue(todo.task); setIsEdit(true) }}>Edit</Button>}
                    {isEdit && <Button onClick={() => setIsEdit(false)}>Done</Button>}
                    &nbsp;
                    <Button onClick={() => deleteTodoItem(todo.id)} type="danger">Delete</Button>
                </Col>
            </Row>
        </>
    )
}

export default TodoItem
