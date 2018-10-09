import React, { Component, Fragment } from "react";
import { HotBoardList } from "../style";

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
            "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png",
          href: ""
        },
        {
          imgUrl:
            "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
          href: ""
        },
        {
          imgUrl:
            "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
          href: ""
        },
        {
          imgUrl:
            "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
          href: ""
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.boardInfo.map(item => {
          return (
            <HotBoardList key={item.imgUrl}>
              <a href={item.href}>
                <img src={item.imgUrl} alt=''/>
              </a>
            </HotBoardList>
          );
        })}
      </Fragment>
    );
  }
}

export default HotBoard;
