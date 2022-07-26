import {Component} from 'react'
import styled from 'styled-components'
import b5banner from './Image/cli.jpg'
import Slider from './slider.js'


const B5container = styled.div`

height :100vh;
width :100vw;
`
const B4box2 = styled.div`
text-align: center;
padding-bottom: 60px;

`
const B4h2 = styled.h2`
font-size: 45px;
color: #3e3e3e;
line-height: 50px;
font-weight: bold;
padding-bottom: 20px;
margin-top: 70px;
`
const B4span = styled.span`
font-size: 17px;
line-height: 28px;
`
const Picture = styled.div`
     background-image: url(${b5banner});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height :80vh;
    width: 100vw;
    background-repeat: no-repeat;
    padding-top:10px;

`
const B4box3 = styled.div`
height:40%;
width:50%;
border:2px solid red;
margin: 0 auto;
`

export default function Body5(){
  return(
    <div>
    <B5container>
    <Picture>
    <B4box2>
    <B4h2> What People Says</B4h2>
    <B4span>looking at its layout. The point of using Lorem Ipsumreadable content of a page when looking at its layout.</B4span>
    </B4box2>
    <Slider/>

    </Picture>
    </B5container>
    </div>
  )
}
