import React, { Component } from "react";
import axios from "axios";
import { Icon } from "antd";
import { CollectionWrapper, CollectionItem, CollectionMore } from "../style";
export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionList: []
    };
  }
  componentDidMount() {
    axios.get("./api/collection-list.json").then(res => {
      this.setState(() => ({
        collectionList: res.data.data
      }));
      console.log("====================================");
      console.log(res.data.data);
      console.log("====================================");
    });
  }
  render() {
    return (
      <div>
        <CollectionWrapper>
          {this.state.collectionList.map(item => {
            return (
              <CollectionItem key={item.content}>
                <img src={item.url} alt="" />
                <span>{item.content}</span>
              </CollectionItem>
            );
          })}

          <CollectionMore>
            <a target="_blank">
              更多热门专题
              <Icon type="right" />
            </a>
          </CollectionMore>
        </CollectionWrapper>
      </div>
    );
  }
}
