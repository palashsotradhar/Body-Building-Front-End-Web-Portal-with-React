import {Component} from 'react'
import styled from 'styled-components'



const B2box1title = styled.div`

height: 66px;
width: 127px;
margin: 10px 0;

`
const B2box1logo = styled.div`

    height: 120px;
    width: 125px;
    margin: 30px 0;
`

const B2box1 = styled.div`
height:280px;
width:250px;

margin : 0 10px;
box-shadow: #ddd 0px 0px 10px 0px;
display:flex;
flex-direction: column;
align-items: center;
box-shadow: #ddd 0px 0px 10px 0px;
border-radius: 20px;


`


export default class CategoryItem extends Component{
  render(){
    return(<div>
      <B2box1>
      <B2box1logo>
      <img src = {this.props.item.img} height = '100%' width = '100%'/>
      </B2box1logo>
      <B2box1title>
      {this.props.item.title}
      </B2box1title>
      </B2box1>
      </div>)
  }
}
