import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import axios from 'axios'
import {Layout, Menu, Icon, Input, Carousel, Tabs, Button, Breadcrumb} from 'antd';
import TopHeader from './TopHeader'
import Searching from './SearchingBar'
import Smn from './Submenu'
import Questions from './Questions'
import Us from './UserCenter'
import { queryQuestions } from './server'
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

class Que extends Component {
  
 
  render() {
  	
  	
    return (
      <div className="App">
    
      <Layout>
    <Layout className="layout"> 
  
    
    <TopHeader />	
		<Content style={{ width: 1400,height: 35 }}>
      <Searching />
      </Content>
   
      <Smn/>
    
  </Layout>
    <Layout>
     
      <Layout style={{ padding: '0 24px 24px' }}>
      
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700}}>
          <Questions/>
        </Content> 
        <Sider width={350} style={{ background: '#fff' }}>
        <Us/>
      </Sider>
      </Layout>
    </Layout>
  </Layout>
      </div>
    );
  }
}


export default Que;
