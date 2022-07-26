import {Component} from 'react'
import styled from 'styled-components'
import b3backgroud from './Image/disco.jpg'

const B3Box1 = styled.div`

height : 100vh;
width : 100vw;
`

const B3picture = styled.div`
    background-image: url(${b3backgroud});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height :100vh;
    width: 100vw;
    background-repeat: no-repeat;
    display : flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const B3block1 = styled.h1`

height : 20%;
width: 80%;
color: #fff;
padding: 0 33px;
font-weight: 501;
text-align : center;
`
const B3block2 = styled.div`

height : 20%;
width: 81%;
color: #fff;
padding: 0 33px;
font-weight: 501;
text-align : center;
display: block;


`
const Button1 = styled.a`
font-size: 17px;
background-color: transparent;
border: #eb699e solid 2px;
color: #eb699e;
padding: 13px 0px;
width: 100%;
max-width: 190px;
text-align: center;
display: inline-block;
cursor: pointer;
transition: ease-in all 0.5s;
&:hover {
background-color:white;
}
`


export default class Body3 extends Component{
  render(){
    return(<div>
      <B3Box1>
      <B3picture>
      <B3block1>
      FITNESS CLASSES THIS SUMMER. PAY<br/> NOW AND GET 25% DISCOUNT
      </B3block1>
      <B3block2>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature<br/> from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor a
      </B3block2>
     <Button1>Read More</Button1>
      </B3picture>


      </B3Box1>
      </div>)
  }
}
