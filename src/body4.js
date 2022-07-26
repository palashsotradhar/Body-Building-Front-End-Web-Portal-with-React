import {Component} from 'react'
import styled from 'styled-components'
import rock from './Image/img.jpg'

const B4box1 = styled.div`
height : 100vh;
width : 100vw;
`
const B4box2 = styled.div`
text-align: center;
padding-bottom: 60px;
margin-top : 60px;
`
const B4h2 = styled.h2`
font-size: 45px;
color: #3e3e3e;
line-height: 50px;
font-weight: bold;
padding-bottom: 20px;
`
const B4span = styled.span`
font-size: 17px;
line-height: 28px;
`
const B4box3 = styled.div`

height : 70%;
width : 80%;
margin:0px auto;
display:flex;
padding-left:3rem;
`
const B4box3b1 = styled.div`

height:98%;
width:30%;
margin:0px 20px;
background: #eb699e;
`
const B4box3b2 = styled.div`

height:90%;
width : 60%;
margin-top:30px;
`
const Form1 = styled.input`
border: #f6c2d7 solid 1px;
padding: 0px 19px;
margin: 10px;
width: 75%;
height: 45px;
background: transparent;
color: #f5bed2;
font-size: 16px;
font-weight: 500;
border-radius: 20px;

outline:none;
margin-top:30px;
::-webkit-input-placeholder {color: white;}

`
const Form2 = styled.textarea`
border: #f6c2d7 solid 1px;
padding: 0px 19px;
margin: 10px;
width: 75%;
background: transparent;
color: #f5bed2;
font-size: 16px;
font-weight: 500;
border-radius: 15px;
padding-top: 35px;
color:white;
outline:none;
`
const Button = styled.button`
font-size: 17px;
transition: ease-in all 0.5s;
background-color: #efb68d;
color: #fff;
padding: 13px 0px;
margin: 0 auto;
max-width: 200px;
width: 100%;
display: block;
font-weight: 500;
text-transform: uppercase;
border-radius: 35px;
transition: ease-in all 0.5s;
border : none;
cursor :pointer;
&:hover {
background-color:black;
color:white;

}
`

export default class Body4 extends Component{
  render(){
    return(<div>
      <B4box1>
      <B4box2>
      <B4h2>Rqueste a call back</B4h2>
      <B4span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered a</B4span>
      </B4box2>
      <B4box3>
      <B4box3b1 className = 'item1'>
      <form>
      <Form1 placeholder = 'Name'>

      </Form1>
      <Form1 placeholder = 'Phone'>

      </Form1>
      <Form1 placeholder = 'Email'>

      </Form1 >
      <Form2  value="Message">
      </Form2>
      <Button>
      Send
      </Button>
      </form>

      </B4box3b1>
      <B4box3b2 className = 'item2'>
      <img src={rock} alt='this is the picture of rock' height = '100%' width = '100%'/>
      </B4box3b2>

      </B4box3>
      </B4box1>
      </div>)
  }
}
