import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  DetailTitle,
  DetailWrapper,
  DetailAuthor,
  AuthorInfo,
  AdPart
} from "./style";

class Detail extends Component {
  render() {
    const { match, articleInfo, history, adImg } = this.props;
    let id = match.params.id;
    let currentData = articleInfo[id];
    if (!currentData) {
      history.push("/");
      return <Fragment />;
    }
    return (
      <Fragment>
        <DetailWrapper>
          <DetailTitle>{currentData.title}</DetailTitle>
          <DetailAuthor>
            <img className="avatar" src={currentData.avator} alt="" />
            <AuthorInfo>
              <span className="name">{currentData.author}</span>
              <span className="meta">
                2018.10.07 00:12* 字数 1201 阅读 1155 评论 7 喜欢 23
              </span>
            </AuthorInfo>
          </DetailAuthor>
        </DetailWrapper>

        {/* advertisement */}
        <AdPart />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleInfo: state.getIn(["home", "articleInfo"]),
    content: state.getIn(["detail", "content"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Detail);
