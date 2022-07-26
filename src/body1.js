import {Component} from 'react'
import banner from './Image/banner.jpg'
import styled from 'styled-components'
import toy from './Image/toy_img.png'
import axios from 'axios'

const QUOTES_API = 'http://127.0.0.1:8000/api/student/'

const Picture = styled.div`
     background-image: url(${banner});
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
const Box1 = styled.div`
height: 450px;
    width: 550px;



  `
const Text1 = styled.div`
    font-weight: bold;
    color: #fff;
    font-size: 30px;
`
const Text2 = styled.div`
color: #eb699e;
font-size: 23px;

`
const Text3 = styled.div`

color: #fff;

`
const Img = styled.div`
height:100%;
margin-top:10%;

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


export default class Body1 extends Component{
  state = {
    quotes : []
  }
  componentDidMount(){
    this.getCategories()
  }
  getCategories(){
    axios.get(QUOTES_API)
    .then(res => {
      this.setState({quotes: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
      <div>
     <Picture>
     <Box1>
     <div>
     {this.state.quotes.map(item =>(<Text1>{item.Title_name}</Text1>))}

     </div>
     <Text2>Landing Page 2019</Text2>
     <br/>
     <Text3>It is a long established fact that a reader
     will be distracted by the readable content of a page
     when looking at its layout. The point of using Lorem
      Ipsum is that it has a more-or-less normal distribution
       of letters, as opposed to using 'Content here, content here', making it</Text3>
       <br/>
     <Button1>Read More</Button1>
     </Box1>
      <Box1>
      <Img>
      <img src = {toy} alt = 'its a image' height = '80%' width = '80%'/>
      </Img>
      </Box1>
     </Picture>
      </div>
    )
  }
}
