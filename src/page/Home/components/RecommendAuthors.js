import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreater } from "../store";
import { AuthorsWrapper, AuthorsItem } from "../style";
import { Icon } from "antd";

class RecommendAuthors extends Component {
  componentDidMount = () => {
    this.props.getAuthors();
  };

  render() {
    return (
      <AuthorsWrapper>
        <div className="title">
          <span>推荐作者</span>
          <span className="right">换一批</span>
          <Icon type="sync" className="right icon" />
        </div>
        <div>
          {this.props.recommendAuthorsList.map(item => {
            return (
              <AuthorsItem key={item.id}>
                <img src={item.avatar_source} alt={item.nickname} />
                <div className="info">
                  <span>{item.nickname}</span>
                  <span className="desc">
                    写了
                    {item.total_wordage}字 · {item.total_likes_count}
                    喜欢
                  </span>
                </div>
                <span className="right">关注</span>
              </AuthorsItem>
            );
          })}
        </div>
        <div className="viewAll">
          <span>查看全部</span>
          <Icon type="rigth" />
        </div>
      </AuthorsWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    recommendAuthorsList: state.getIn(["home", "recommendAuthorsList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthors() {
      dispatch(actionCreater.AuthorsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendAuthors);
