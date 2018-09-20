import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem ,HeaderApp,NavSearch,Button}
  from './style'


class Header extends Component {
  render() {
    return (
      <HeaderApp>
        <HeaderWrapper>
          <Logo href='/'></Logo>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <Button className='write'>写文章</Button>
            <Button className='reg'>注册</Button>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>Aa</NavItem>
            <NavSearch></NavSearch>
          </Nav>
        </HeaderWrapper>
      </HeaderApp>
      
    )
  }
}


export default Header;