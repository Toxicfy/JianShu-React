import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "./components/Collection";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { actionCreater } from "./store";
import { Carousel } from "antd";

class Home extends Component {
  componentDidMount() {
    this.props.getBannerImgList();
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          {/* 轮播banner */}
          <Carousel autoplay>
            {this.props.bannerImageList.map(item => {
              return (
                <div key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
          {/* 推荐标题 */}
          <Collection />
        </HomeLeft>
        <HomeRight />
      </HomeWrapper>
    );
  }
}

// 获取state数据
const mapStateToProps = state => {
  return {
    bannerImageList: state.getIn(["home", "bannerImageList"]),
    collectionList: state.getIn(["home", "collectionList"])
  };
};
// 触发action
const mapDispatchToProps = dispatch => {
  return {
    getBannerImgList() {
      dispatch(actionCreater.bannerList());
    }
  };
};

// 创建连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
