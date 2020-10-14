import React from 'react';
import './App.css';
import { Button, Carousel, Slider, InputNumber, Row, Col, Table, Tag, Space, Divider, Typography, List, Form, Input } from 'antd';
import {
  ArrowsAltOutlined, HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import TodoList from './components/TodoList';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FeaturePage from './pages/FeaturePage';
import { Redirect, Route, Switch } from 'react-router-dom';

// import { data, data1 } from './data'

//? antd Variable for List
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

//? antd Variable for add Table
// const columns = [
//   {
//     title: "Full name",
//     dataIndex: "name",
//   },
//   {
//     title: "Birth Day",
//     dataIndex: "birthday"
//   },
//   {
//     title: "Name & Company",
//     render: (text, record) => <p>{`${record.name}(${record.company})`}</p>
//   },
//   {
//     title: "PhoneNumber",
//     dataIndex: "phoneNumber"
//   }
// ]

function App() {
  const onFinish = (value) => {
    console.log(value)
  }
  return (
    <div className="App" >
      {/*//! ใส่ switch เพื่อป้องกันการ Redirect ซ้ำ */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/feature" component={FeaturePage} />
        <Redirect to="/" />
      </Switch>








      {/*//? antd Button 
       <Button type="danger dashed">Primary Button</Button>
      <Button type="ghost" ghost style={{ color: 'lime' }}>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      //? antd Icon 
      <ArrowsAltOutlined />
      <br />
      //? antd Carousel
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      //? antd IntegerStep (Slider)
      <IntegerStep />
      <div className="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div> */}



      {/* //? antd Form Register
      <Form onFinish={onFinish} style={{ width: '50%', margin: '0 auto' }}>
        <Form.Item name="email" label="E-mail" rules={[
          {
            required: true,
            message: "กรุณากรอกช่องนี้"
          },
          {
            type: "email",
            message: 'รูปแบบอีเมล์ไม่ถูกต้อง'
          }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item name="username" label="Username" rules={[
          {
            required: true,
            message: 'กรุณากรอกช่องนี้'
          },
          {
            max: 26,
            message: 'ความยาวเกิน 26 ตัวอักษร'
          },
          {
            min: 6,
            message: 'ความยาวไม่ถึง 6 ตัวอักษร'
          }

        ]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[
          {
            required: true,
            message: 'กรุณากรอกช่องนี้'
          },
          {
            max: 26,
            message: 'ความยาวเกิน 26 ตัวอักษร'
          },
          {
            min: 6,
            message: 'ความยาวไม่ถึง 6 ตัวอักษร'
          }]} >
          <Input.Password />
        </Form.Item>
        <Form.Item name="confirm" label="Confirm Password" dependencies={["password"]} rules={[
          {
            required: true,
            message: 'กรุณากรอกช่องนี้'
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              console.log('getfieldValue', getFieldValue);
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]} >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>*/}

      {/* //? antd TodoList 
      <TodoList />*/}

      {/* //? antd List Item 
       <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <p>{item}</p>}
      /> */}

      {/*  //? antd Table Item 
      <Table dataSource={data} columns={columns} /> */}

    </div >
  );
}


class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}



export default App;
