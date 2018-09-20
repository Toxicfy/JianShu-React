import styled from "styled-components";
import logoPic from '../../statics/logo.png';


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
  display:block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  height: 100%;
`

export const NavItem = styled.div`
  font-size: 17px;
  height: 56px;
  line-height: 26px;
  padding: 15px;
  &.active{
    color:#ea6f5a;
  }
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin-top:9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline:none;
  &::placeholder{
     color:#999;
  }
`

export const Button = styled.div`
  float: right;
  height: 40px;
  line-height: 40px;
  margin: 8px 15px 0;
  border-radius: 20px;
  font-size: 15px;
  text-align:center;
  border:1px solid #ea6f5a;
  &.write{
    background: #ea6f5a;
    color: #fff;
    width: 100px;
  }
  &.reg{
    width:80px;
    color: #ea6f5a;
  };
`