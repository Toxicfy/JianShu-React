import React, { Component, Fragment } from "react";
import { HotBoardList } from "../style";
import Item from "antd/lib/list/Item";

class HotBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardInfo: [
        {
          imgUrl:
            "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
          href: ""
        },
        {
          imgUrl:
            "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
          href: "/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop"
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.boardInfo.map(item => {
          return (
            <HotBoardList key={item.href}>
              <a href={item.href}>
                <img src={item.imgUrl} />
              </a>
            </HotBoardList>
          );
        })}
      </Fragment>
    );
  }
}

export default HotBoard;
