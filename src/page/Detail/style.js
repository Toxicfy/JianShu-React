import styled from "styled-components";

export const DetailWrapper = styled.div`
  color: #333;
  margin: 0 auto;
  padding-top: 76px;
  padding-bottom: 40px;
  width: 620px;
`;

export const DetailTitle = styled.div`
  word-break: break-word !important;
  word-break: break-all;
  margin: 20px 0 0;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`;

export const DetailAuthor = styled.div`
  margin: 30px 0 40px;
  & div {
    vertical-align: middle;
  }
  .avatar {
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
`;

export const AuthorInfo = styled.div`
  display: inline-block;
  margin-left: 16px;
  .name {
    display: block;
    font-size: 16px;
    color: #333;
  }
  .meta {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
  }
`;

//
export const AdPart = styled.div`
  position: fixed;
  top: 80px;
  right: 50%;
  margin-right: -560px;
  width: 180px;
  height: 260px;
  background: #eee;
`;
