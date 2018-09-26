import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, } from './style'
import { Carousel } from 'antd'
import axios from 'axios'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImageList: []
    }
  }
  componentDidMount() {
    axios.get('./api/banner-image.json').then((res) => {
      this.setState(() => ({
        bannerImageList: res.data.data
      }))
    })
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          {/* banner */}
          <Carousel autoplay>
            {
              this.state.bannerImageList.map((item) => {
                return (
                  <div key={item}>
                    <img src={item} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
          {/* recommend tags */}
        </HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
    )
  }
}