import { Button, Col, Divider, Input, List, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { UnorderedListOutlined } from "@ant-design/icons";
const { Text } = Typography;


function TodoList() {
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputValue] = useState("")
    const mockData = [
        {
            id: 1,
            task: "Do homework"
        },
        {
            id: 2,
            task: 'Do todoList'
        },
        {
            id: 3,
            task: 'Do Resume'
        }
    ]

    useEffect(() => {

        return () => {
        }
    }, [])


    return (
        <>
            <Text style={{
                fontSize: '2rem'
            }} type="warning" >
                <UnorderedListOutlined />
                    &nbsp; กรุณาใส่ Todo ที่ต้องการเพิ่ม
            </Text><br />
            <Input style={{ width: '450px' }} value={inputValue} />
            <Button type="primary">Add</Button>
            <Divider orientation='center'></Divider>
            <List
                style={{ width: '500px', margin: '0 auto' }}
                size="small"
                header={<div>TodoList Page</div>}
                bordered
                dataSource={mockData}
                renderItem={item =>
                    <Row>
                        <Col span={20}>
                            <p>{item.task}</p>
                        </Col>
                        <Col>
                            <Button type="danger">Delete</Button>
                        </Col>

                    </Row>}
            />
        </>
    )
}

export default TodoList
