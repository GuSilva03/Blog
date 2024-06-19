import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SkillBox,SkillSec, SkillDesc, SkillSlider, Itens, SkillImg, SubDesc, Background } from './SkillStyles';
import  front  from '../../imagens/front.png';
import react from "../../imagens/react.png";
import html from "../../imagens/html.png";
import css from "../../imagens/css.png";
import js from "../../imagens/js.png";
import fundo from '../../imagens/fundo.jpg';
import { Heading } from '../../Styles/GlobalStyles';
const Skill = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
        <SkillSec id='Skills'>
           <Container>
            <Row>
                <Col>
                    <SkillBox>
                        <Heading as='h2' size='h2'>SKILLS</Heading>
                        <SkillDesc>
                        There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain
                        </SkillDesc>
                        <SkillSlider>
                            <Carousel responsive={responsive} infinite={true}>
                                <Itens>
                                    <SkillImg src={front}>
                                    </SkillImg>
                                    <SubDesc>
                                        Web Developer
                                    </SubDesc>
                                </Itens>
                                <Itens>
                                <SkillImg src={react}>
                                        </SkillImg>
                                        <SubDesc>
                                            REACT JS
                                        </SubDesc>
                                </Itens>
                                <Itens>
                                    <SkillImg src={css}>
                                    </SkillImg>
                                        <SubDesc>
                                        CSS
                                        </SubDesc>
                                </Itens>
                                <Itens>
                                    <SkillImg src={js}>
                                    </SkillImg>
                                    <SubDesc>
                                        Java Script
                                    </SubDesc>
                                </Itens>
                                <Itens>
                                    <SkillImg src={html}>
                                    </SkillImg>
                                    <SubDesc>
                                        HTML
                                    </SubDesc>
                                </Itens>
                            </Carousel>
                        </SkillSlider>
                    </SkillBox>
                </Col>
            </Row>
           </Container>
           <Background src={fundo}/>
        </SkillSec>
    </>
  )
}

export default Skill
