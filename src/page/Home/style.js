import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 86px auto 0;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  border-radius: 6px;
  overflow: hidden;
  & img {
    width: 625px;
    height: 270px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 270px;
    line-height: 270px;
    background: #364d79;
    overflow: hidden;
  }
`;

// Collection Component
export const CollectionWrapper = styled.div`
  padding: 20px 0 10px 0;
  width: 100%;
  overflow: hidden;
  min-height: 100px;
  border-bottom: 1px solid #f0f0f0;
`;
export const CollectionItem = styled.div`
  display: inline-block;
  margin: 0 18px 18px 0;
  padding-right: 10px;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;

  img {
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const CollectionMore = styled.div`
  display: inline-block;
  line-height: 34px;
  a {
    margin-top: 7px;
    font-size: 14px;
    color: #787878;
    cursor: pointer;
  }
  a:hover {
    color: #787878;
  }
  .icon-right {
    margin-left: 5px;
  }
`;

// Article Component
export const ArticleWrapper = styled.div`
  position: relative;
`;
export const ArticleItem = styled.div`
  min-height: 140px;
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  .text-info {
    width: 483px;
    color: #333;
    .title {
      cursor: pointer;
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #333;
    }
    .desc {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #999;
    }
    .icon {
      margin-left: 8px;
      color: #b4b4b4;
    }
    .author {
      color: #b4b4b4;
    }
  }
  .image-info {
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
`;

// ========================================================

// Right Side
export const HomeRight = styled.div`
  float: right;
  margin-left: 30px;
  width: 280px;
  min-height: 100px;
`;

// HotBoard Component
export const HotBoardList = styled.div`
  display: flex;
  width: 280px;
  img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const DownloadArea = styled.div`
  margin-top: 5px;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    opacity: 0.85;
  }
  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
      font-size: 15px;
      color: #333;
    }
    .desc {
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`;

export const AuthorsWrapper = styled.div`
  .title {
    font-size: 14px;
    color: #969696;
    .right {
      float: right;
      cursor: pointer;
    }
    .icon {
      margin: 2px 5px 0 0;
    }
  }
  .viewAll {
    margin-top: 20px;
    text-align: center;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 280px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
`;

export const AuthorsItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  img {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .info {
    span {
      display: block;
      font-size: 14px;
    }
    .desc {
      margin-top: 2px;
      font-size: 12px;
      color: #969696;
    }
  }
  .right {
    float: right;
    margin-top: -42px;
    cursor: pointer;
    color: #42c02e;
  }
`;

// SideTool Part
export const SideTool = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
  border: 1px solid #eee;
  .top-icon {
    cursor: pointer;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: block;
  }
`;
