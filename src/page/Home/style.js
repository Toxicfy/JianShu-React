import styled from "styled-components";

export const HomeWrapper = styled.div`
  width:960px;
  margin: 30px auto 0;
  overflow:hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  border-radius: 6px;
  overflow:hidden;
  & img{
    width:625px;
    height:270px;
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
  background:#eee;
  float: left;
  margin-left:30px;
  width: 280px;
  min-height:100px;
`;


