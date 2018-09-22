import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  Logo,
  Nav,
  Button,
  NavItem,
  HeaderApp,
  HeaderWrapper,
  NavSearch,
  NavSearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
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
              {this.getListArea(focused)}
            </NavSearchWrapper>
          </Nav>
        </HeaderWrapper>
      </HeaderApp>
    );
  }

  getListArea(show){
    if (show) {
      return (
        <NavSearchInfo>
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>简书</SearchInfoItem>
            <SearchInfoItem>生活</SearchInfoItem>
            <SearchInfoItem>旅游</SearchInfoItem>
          </SearchInfoList>
        </NavSearchInfo>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
