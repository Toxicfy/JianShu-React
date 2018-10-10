import React, { Component, Fragment } from "react";
import axios from "axios";
import { HotBoardList } from "../style";

class HotBoard extends Component {
  componentDidMount() {
    axios.get("./api/board-info.json").then(res => {
      this.setState(() => ({ boardInfo: res.data.data }));
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      boardInfo: []
    };
  }
  render() {
    return (
      <Fragment>
        {this.state.boardInfo.map(item => {
          return (
            <HotBoardList key={item.imgUrl}>
              <a href={item.href}>
                <img src={item.imgUrl} alt="board images" />
              </a>
            </HotBoardList>
          );
        })}
      </Fragment>
    );
  }
}

export default HotBoard;
