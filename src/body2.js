import {Component} from 'react'
import styled from 'styled-components'
import CategoriesItem from './categories'


const Paranoid = styled.div`
height:100vh;
width : 100vw;

margin:90px 0px;

`
const Titlepage1 = styled.div`

text-align: center;
padding-bottom: 60px;
display: inline;

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
margin: 0 auto;
display: block;
margin-top: 70px;
transition: ease-in all 0.5s;
&:hover {
background-color:black;
color:white;

}
`



export default class Body2 extends Component{
  render(){
    return(
      <div>
      <Paranoid>
      <Titlepage1 ><h1 style = {{  fontSize: '42px'}}>Our Features Classes</h1>
      <h5 style = {{color: '#eb699e'}}>CHECKOUT OUR FITNESS CLASSES</h5>
      </Titlepage1>
  <CategoriesItem/>
      <Button1>Read More</Button1>
      </Paranoid>

      </div>
    )
  }
}
