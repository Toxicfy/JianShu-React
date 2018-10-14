import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { DetailTitle, DetailWrapper } from "./style";

class Detail extends Component {
  render() {
    const { match, articleInfo, history } = this.props;
    let id = match.params.id;
    let currentData = articleInfo[id];
    if (!currentData) {
      history.push("/");
      return <Fragment />;
    }
    return (
      <DetailWrapper>
        <DetailTitle>{currentData.title}</DetailTitle>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleInfo: state.getIn(["home", "articleInfo"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Detail);
