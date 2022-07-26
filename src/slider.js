import styled from 'styled-components'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from "react";

const Slider1 = styled.div`
height: 25vh;
width: 45%;

margin: 0 auto;
display:flex;
position:relative;
background: #fff;
}
`
const Arrow = styled.div`
display:flex;
align-items :center;
justify-content :center;
position:absolute;
top:0;
bottom:0;
cursor:pointer;
margin:auto;

left: ${props => props.direcion === 'left' && '10px'};

right: ${props => props.direction === 'right' && '10px'};

`
const Slider2 = styled.div`
display:flex;
align-items :center;
transition: all 2s ease;
transform:translateX(${props => props.slideIndex * -100}vw);


`
const Infodescription = styled.div`
width : 100vw;


`

const Title = styled.h4`
text-align:center;
margin-right:800px;

`
const Description = styled.p`
text-align:center;
margin-right:800px;
margin-left:50px;

`

const Slider = () =>{
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);

    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return(
    <div>
    <Slider1>
    <Slider2 slideIndex = {slideIndex}>
    <Infodescription>
    <Title>
    Duis aute
    </Title>
    <Description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    </Description>
    </Infodescription>
    <Infodescription>
    <Title>
    Duis fuckitude
    </Title>
    <Description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    </Description>
    </Infodescription>
    <Infodescription>
    <Title>
    Duis lompodicide
    </Title>
    <Description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    </Description>
    </Infodescription>
    </Slider2>
    <Arrow direction = 'left' onClick = {() => handleClick('left')}>
    <ArrowBackIosNewIcon />
    </Arrow>
    <Arrow direction = 'right' onClick = {() => handleClick('right')}>
    <ArrowForwardIosIcon/>
    </Arrow>
    </Slider1>
    </div>
  )
}

export default Slider;
