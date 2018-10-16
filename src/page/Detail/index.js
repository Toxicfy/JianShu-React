import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DetailFooter from "./components/DetailFooter";
import DetailAuthor from "./components/DetailAuthor";
import { DetailTitle, DetailWrapper, AdPart, DetailContent } from "./style";

class Detail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { match, articleInfo, history, content } = this.props;
    let id = match.params.id,
      currentData = articleInfo[id];
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
          <DetailContent>
            <span>内容待编写....</span>
          </DetailContent>

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
    content: state.getIn(["detail", "content"])
  };
};

export default connect(
  mapStateToProps,
  null
)(Detail);
