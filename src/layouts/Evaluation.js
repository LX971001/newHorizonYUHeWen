import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import S1 from './step1';
import S2 from './step2';
import S3 from './step3';
import TopHeader from './TopHeader'
const { Header, Content, Footer } = Layout;
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: <S1/>,
}, {
  title: 'Second',
  content: <S2/>,
}, {
  title: 'Last',
  content: <S3/>,
}];

class Eva extends Component {
	constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
	 next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  
 
  render() {
  	const { current } = this.state;
  	
  	
    return (
      <div className="Eva">
       <Layout className="layout">
    
      <TopHeader/>
   
    <Content style={{ padding: '0 150px' ,marginTop: "50px"}}>
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action" style={{ textAlign: "center",marginTop: "50px" }}>
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>下一项</Button>
          }
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>开始评测</Button>
          }
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一项
            </Button>
            )
          }
        </div>
      </div>
      
      
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    
    </Footer>
  </Layout>
  </div>
  );
      
      
      
     
     }
  }
export default Eva;