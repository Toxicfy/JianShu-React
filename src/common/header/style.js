import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderApp = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  max-width: 1920px;
  min-width: 768px;
`;
export const HeaderWrapper = styled.div`
  postion: reative;
  margin: 0 0 0 14%;
  width: 86%;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  height: 100%;
`;

export const NavItem = styled.div`
  font-size: 17px;
  height: 56px;
  line-height: 26px;
  padding: 15px;
  cursor: pointer;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  .iconfont {
    font-size: 19px;
  }
`;
/**
 * Header Search part
 */
export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    top: 13px;
    right: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #969696;
    text-align: center;
    border-radius: 15px;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: none;
  border-radius: 40px;
  background: #eee;
  outline: none;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
  transition: width 0.5s ease-out;
`;

export const NavSearchInfo = styled.div`
  position: absolute;
  z-index: 11;
  background: #fff;
  left: 22px;
  top: 56px;
  width: 240px
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,0.2);
  &:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.span`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`;
// Header Button
export const Button = styled.div`
  float: right;
  height: 40px;
  line-height: 40px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  border: 1px solid #ea6f5a;
  &.write {
    background: #ea6f5a;
    color: #fff;
    width: 100px;
  }
  &.reg {
    width: 80px;
    color: #ea6f5a;
  }
`;
