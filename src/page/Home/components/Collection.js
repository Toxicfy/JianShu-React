import React, { Component } from "react";
import { CollectionWrapper, CollectionItem } from "../style";
export default class Collection extends Component {
  render() {
    return (
      <div>
        <CollectionWrapper>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>读书</span>
          </CollectionItem>

          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>摄影</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>@IT·互联网</span>
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
              src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>简书电影</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>手绘</span>
          </CollectionItem>
          <CollectionItem>
            <img
              src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
              alt=""
            />
            <span>旅行·在路上</span>
          </CollectionItem>

          <a
            target="_blank"
            href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop"
          >
            更多热门专题 <i className="iconfont ic-link" />
          </a>
        </CollectionWrapper>
      </div>
    );
  }
}
