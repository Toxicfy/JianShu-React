import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "./components/Collection";
import HotBoard from "./components/HotBoard";
import DownloadApp from "./components/DownloadApp";
import Article from "./components/Article";
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
          {/* banner */}
          <Carousel autoplay speed="500">
            {this.props.bannerImageList.map(item => {
              return (
                <div key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
          {/* TitleCollection */}
          <Collection />
          {/* Article part */}
          <Article />
        </HomeLeft>

        <HomeRight>
          {/* Hot board */}
          <HotBoard />
          {/* Download App */}
          <DownloadApp />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

// 获取state数据
const mapStateToProps = state => {
  return {
    bannerImageList: state.getIn(["home", "bannerImageList"])
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
