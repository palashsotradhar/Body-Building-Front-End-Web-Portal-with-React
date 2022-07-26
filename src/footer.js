import {Component} from 'react'
import styled from 'styled-components'

const Fotter1 = styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content : center;
align-items : center;

background: #232323;
padding-top: 85px;
text-align: center;
flex-direction: column;
`
const Fotter2 = styled.div`
height: 60%;
width: 60%;

`
const Text1 = styled.h3`
    color: #daccfd;
    font-size: 45px;

font-weight: bold;
`
const Text2 = styled.h3`
color: white;
font-size: 45px;

font-weight: bold;
margin: -50px 0px;
`
const Text3 = styled.p`
color: #fff;
font-size: 17px;
line-height: 30px;
padding-top: 20px;
font-weight: 501;
margin: 30px 0px;

`
const Fform = styled.form`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-top: 50px;
margin-left:50px;
`
const F1form = styled.input`
border: inherit;
padding: 0px 19px;
width: 73%;
height: 49px;
background: #fff;
color: #000;
font-size: 16px;
font-weight: 500;
border-radius: 35px;
}
`
const FButton = styled.button`
font-size: 17.5px;
transition: ease-in all 0.5s;
background-color: #efb68d;
color: #fff;
padding: 5px 0px;
max-width: 123px;
width: 100%;
display: block;
font-weight: 500;
text-transform: uppercase;
border-radius: 35px;
border: #fff solid 4px;
margin-left: -40px;
cursor: pointer;
&:hover {
background-color:#f542da;
}

`
const Hr = styled.hr`
 // border: 10px solid green;
 width:100%;
// margin:50px 0px;
`
const Text4 = styled.p`
text-align:center;
color:white;
`


export default class Fotter extends Component{
  render(){
    return(
      <div>
      <Fotter1>
      <Fotter2>
      <Text1>
      Free Multipurpose
      </Text1>
      <Text2>
       Responsive Landing Page 2019
      </Text2>
      <Text3>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
      </Text3>
      <Fform>

      <F1form placeholder="Enter your email" type="text" name="Enter your email" />
      <FButton>
      subscribe
      </FButton>
      </Fform>

      </Fotter2>
            <br/>
            <Hr/>
            <br/>
            <Text4>
            © 2019 All Rights Reserved. Design by Free Html Templates
            </Text4>

      </Fotter1>

      </div>
    )
  }
}
