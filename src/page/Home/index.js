import React, { Component } from "react";
import { connect } from "react-redux";
import Collection from "./components/Collection";
import HotBoard from "./components/HotBoard";
import DownloadApp from "./components/DownloadApp";
import Article from "./components/Article";
import RecommendAuthors from "./components/RecommendAuthors";
import { HomeWrapper, HomeLeft, HomeRight, SideTool } from "./style";
import { actionCreater } from "./store";
import { Carousel, BackTop, Icon } from "antd";

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
          {/* Recommended Authors */}
          <RecommendAuthors />
        </HomeRight>
        {/* To Top */}
        <BackTop>
          <SideTool onClick={this.props.scrollToTop}>
            <Icon type="up" theme="outlined" className="top-icon" />
          </SideTool>
        </BackTop>
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    bannerImageList: state.getIn(["home", "bannerImageList"]),
    showSide: state.getIn(["home", "showSide"])
  };
};

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
