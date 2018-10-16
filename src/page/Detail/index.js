import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DetailFooter from "./components/DetailFooter";
import DetailAuthor from "./components/DetailAuthor";
import { actionCreater } from "./store";
import { DetailTitle, DetailWrapper, AdPart, DetailContent } from "./style";
class Detail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getDetailContent();
  }
  render() {
    const { match, articleInfo, history, content, detailContent } = this.props;
    let id = match.params.id,
      currentData = articleInfo[id];
    let currentDetailContent = detailContent[id];
    if (!currentData) {
      history.push("/");
      return <Fragment />;
    }
    return (
      <Fragment>
        {/* content */}
        <DetailWrapper>
          {/* title */}
          <DetailTitle>{currentData.title}</DetailTitle>

          {/* author */}
          <DetailAuthor currentData={currentData} content={content} />

          {/* content */}
          <DetailContent
            dangerouslySetInnerHTML={{ __html: currentDetailContent }}
          />

          {/* detail footer */}
          <DetailFooter avator={currentData.avator} name={currentData.author} />
        </DetailWrapper>

        {/* advertisement */}
        <AdPart />

        {/* footer */}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleInfo: state.getIn(["home", "articleInfo"]),
    content: state.getIn(["detail", "content"]),
    detailContent: state.getIn(["detail", "detailContent"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailContent: () => {
      dispatch(actionCreater.getDetail());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
