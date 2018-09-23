import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  Logo,
  Nav,
  Button,
  HeaderApp,
  HeaderWrapper,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  NavSearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";

class Header extends Component {
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
    return (
      <HeaderApp>
        <HeaderWrapper>
          <Logo href="/" />
          <Nav>
            <NavItem className="left active">首页</NavItem>
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
                onFocus={handleInputFocus.bind(this, this.props.list)}
                onBlur={handleInputBlur.bind(this)}
              />
              <i className={focused ? "focused iconfont" : "iconfont"}>
                &#xe62a;
              </i>
              {this.getListArea()}
            </NavSearchWrapper>
          </Nav>
        </HeaderWrapper>
      </HeaderApp>
    );
  }

  getListArea() {
    const {
      focused,
      list,
      mouseIn,
      page,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseIn) {
      return (
        <NavSearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={handleChangePage}>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </NavSearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      dispatch(actionCreators.searchFocus()); //聚焦动画
      if (list.size === 0) {
        dispatch(actionCreators.searchList()); //数据请求
      }
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage() {
      dispatch(actionCreators.changePage());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
