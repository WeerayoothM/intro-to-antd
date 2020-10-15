import React, { useState } from "react";
import { Typography, Button, Col, Divider, Input, List, Row } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import _, { set } from "lodash";
import TodoItem from "./TodoItem";
const { Text } = Typography;

function TodoListHook() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState("");

    // Mock Data
    //   useEffect(() => {
    //     setTodoList([
    //       { id: 1, task: "Do homework" },
    //       { id: 2, task: "Play football" },
    //       { id: 3, task: "Play game" },
    //       { id: 4, task: "Read book" },
    //     ]);
    //   }, []);
    const addTodoItem = () => {
        const newTodoList = [...todoList];
        if (inputField === "") return;
        newTodoList.push({
            id: _.uniqueId(),
            task: inputField,

        });
        setTodoList(newTodoList);
        setInputField("");
    };
    const deleteTodoItem = (id) => {
        const newTodolist = [...todoList].filter((todo) => todo.id !== id);
        setTodoList(newTodolist);
    };
    const editTodoItem = (id, editTask) => {
        const newTodoList = [...todoList]
        const indexEdit = newTodoList.findIndex((todo) => todo.id === id)
        newTodoList[indexEdit].task = editTask
        setTodoList(newTodoList)
    }

    return (
        <Row justify="center">
            <Col style={{ marginTop: "30px" }}>
                <Row justify="center" style={{ marginBottom: "30px", fontSize: '2rem' }}>
                    <Text type="warning">
                        <UnorderedListOutlined />&nbsp; กรุณาใส่ Todo ที่ต้องการเพิ่ม
                    </Text>
                </Row>
                <Row justify="center">
                    {/* อยากแบ่งช่อง Input กับ Todolist ใส่ Row ครอบ */}
                    <Col span={20}>
                        {/* อยากทำให้ ช่อง Input ไม่ตรงต้องใส่ Col ครอบ */}
                        <Input
                            value={inputField}
                            onChange={(e) => setInputField(e.target.value)}
                        />
                    </Col>
                    <Col span={4}>
                        <Button onClick={addTodoItem} style={{ width: "100%" }}>
                            Add
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <List
                        style={{ width: "500px" }}
                        header={<div style={{ textAlign: "center" }}>Todo List Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={(todo) => (
                            <List.Item>
                                <TodoItem todo={todo} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem} />
                            </List.Item>
                        )} // ทำหน้าที่เหมือน map ข้องบน
                    />
                </Row>
            </Col>
        </Row>
    );
}

export default TodoListHook;
