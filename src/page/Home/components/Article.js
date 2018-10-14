import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import { ArticleWrapper, ArticleItem } from "../style";
import { Link } from "react-router-dom";
import { Icon } from "antd";

class Article extends Component {
  componentDidMount() {
    this.props.getArticle();
  }
  render() {
    return (
      <ArticleWrapper>
        {this.props.articleInfo.map(item => {
          return (
            <ArticleItem key={item.author}>
              <div className="text-info">
                <Link className="title" to="/detail">{item.title}</Link>
                <div className="desc">
                  <span>{item.desc}</span>
                </div>
                <div className="author">
                  <span>{item.author}</span>
                  <Icon type="message" theme="filled" className="icon" />
                  <Icon type="heart" theme="filled" className="icon" />
                </div>
              </div>
              <div className="image-info">
                <img src={item.image} alt="" />
              </div>
            </ArticleItem>
          );
        })}
      </ArticleWrapper>
    );
  }
}

// 获取state数据
const mapStateToProps = state => {
  return {
    articleInfo: state.getIn(["home", "articleInfo"])
  };
};
// 触发action
const mapDispatchToProps = dispatch => {
  return {
    getArticle() {
      dispatch(actionCreater.ArticleList());
    }
  };
};

// 创建连接
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
