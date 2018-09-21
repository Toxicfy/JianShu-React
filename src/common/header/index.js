import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  HeaderApp,
  NavSearch,
  Button,
  NavSearchWrapper
} from "./style";

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderApp>
        <HeaderWrapper>
          <Logo href="/" />
          <Nav>
            <NavItem className="left active">
              <i className="iconfont">&#xe604;</i>
              首页
            </NavItem>
            <NavItem className="left">下载App</NavItem>
            <Button className="write">
              <i className="iconfont">&#xe674;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">Aa</NavItem>
            <NavSearchWrapper>
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus.bind(this)}
                onBlur={handleInputBlur.bind(this)}
              />
              <i className={focused ? "focused iconfont" : "iconfont"}>
                &#xe62a;
              </i>
            </NavSearchWrapper>
          </Nav>
        </HeaderWrapper>
      </HeaderApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
