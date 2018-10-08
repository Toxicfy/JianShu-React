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
export const HomeRight = styled.div`
  background: #eee;
  float: right;
  margin-left: 30px;
  width: 280px;
  min-height: 100px;
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
