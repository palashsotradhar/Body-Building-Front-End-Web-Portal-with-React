import styled from 'styled-components';
import {Categories} from './data';
import {Component} from 'react';
import CategoryItem from './categoryItem';


const Pictureblock = styled.div`
display :flex;
justify-content:center;

`




export default class CategoriesItem extends Component{
  render(){
    return(<div>
      <Pictureblock>

      {Categories.map(item =>(
        // console.log(item.img)

        <CategoryItem item = {item}/>


      ))}

        </Pictureblock>
      </div>)
  }
}
