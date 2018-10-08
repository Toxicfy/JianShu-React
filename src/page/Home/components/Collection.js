import React, { Component } from "react";
import { CollectionWrapper, CollectionItem } from "../style";
export default class Collection extends Component {
  render() {
    return (
      <div>
        <CollectionWrapper>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>故事</span>
          </CollectionItem>

          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>旅行*在路上</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>故事</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>社会热点</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>自然科普</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>自然科普</span>
          </CollectionItem>
        </CollectionWrapper>
      </div>
    );
  }
}
