import React, {Component} from 'react';
import HexCanvas from 'canvas-hex-grid';
import styled from 'styled-components';
import GreenText from '../elements/GreenText';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  font-size: 4.2rem;
  font-family: ${props => props.theme.headerFont};
  text-transform: uppercase;
  font-weight: bold;
  padding: 35px 0 0;
  text-align: center;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  background: rgba(255,255,255, 0.7);
  text-shadow: 1px 1px 1px black;
`;

const SubTitle = styled.p`
    color: white;
    margin: 0;
    font-size: 1.6rem;
    text-shadow: 1px 1px 1px black;
    text-align: center;
  padding: 0 0 35px;

`;

class HexHero extends Component {
  container = React.createRef();

  componentDidMount() {
    this.hexGrid = new HexCanvas.HexGrid(this.container.current);
    const hexArr = this.hexGrid.getAll().hexagonArray;

    for(let i = 0; i < 25; i++) {
      this.flashRandomHexigon(hexArr);
    }

    this.interval = setInterval(() => this.flashRandomHexigon(hexArr), 200);
  }

  flashRandomHexigon = (hexArr) => {
      const randomHex = hexArr[Math.floor(Math.random()*hexArr.length)];
      for(let i = 0; i < Math.floor(Math.random()*10); i++) {
        randomHex.flicker({
          speed: Math.floor(Math.random()*7),
          delay: Math.floor(Math.random()*7)
        })
      }
    }

  render() {
    return (
      <Container ref={this.container} id="hex-header" >
        <Centered>
          <Title><GreenText>Mark</GreenText> Wilkins</Title>
          <SubTitle>Fullstack Web Developer</SubTitle>
        </Centered>
      </Container>
    );
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}

export default HexHero;