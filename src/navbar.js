import {Component} from 'react'
import styled from 'styled-components'
import logo from './Image/logo.png'
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`

height : 13vh;
width :100%;
position: absolute;
`
const Container1 = styled.div`
    height: 8vh;
    width: 100%;
    margin: 2%;
    margin-left: 4%;


`
const Link1 = styled.div`

height: 4vh;
width: 26%;
margin-right: 6%;
float :right;


`
const Link2 = styled.div`
display : flex;
width: 45%;
float:right;
flex-direction:row-reverse;

`

export default class Navbar extends Component{
  render(){
    return(<div>
      <Container>
       <Container1>
      <img src = {logo} alt = 'Its a image' />
      <Link2>
      <Link1>
        <SearchIcon />
      </Link1>
      <Link1>
         REGISTER
      </Link1>
      <Link1>
          LOGIN
      </Link1>
      <Link1>
      CONTUCT US
      </Link1>
      </Link2>
       </Container1>


      </Container>
      </div>)
  }
}
