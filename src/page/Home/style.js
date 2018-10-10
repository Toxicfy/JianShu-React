import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 30px auto 0;
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

// Collection组件
export const CollectionWrapper = styled.div`
  padding: 20px 0 10px 0;
  width: 100%;
  overflow: hidden;
  min-height: 100px;
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

// ========================================================

// Right Side
export const HomeRight = styled.div`
  float: right;
  margin-left: 30px;
  width: 280px;
  min-height: 100px;
`;
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
