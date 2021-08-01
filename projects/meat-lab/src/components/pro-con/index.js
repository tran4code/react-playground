import React from 'react'
import styled from 'styled-components'
import {FaPlus, FaMinus} from 'react-icons/fa';
import CardItem from './CardItem';
import CardItemRed from './CardItemRed';
import './Cards.css'
import './CardsRed.css'
import cow from './cow.png';
import factory from './factor.png'
import meat from './meat.png'
import society from './society.svg'
import antibody from './anti-body.png'
import environment from './environment.png'

export const CardContainer = styled.div`
    display: flex;
    flex-flow: column; // options: {Row, column} no difference with test 1 with h1
    align-items: center;
    /* max-height: 1000px; DOESNT MATTER FOR display: flex */
    max-width: 1120px;
    width: 90%;
    /* outline: solid blue;
    outline-offset: -2px; */
`

export const CardWrapper = styled.div`
    position: relative;
    /* outline: solid green;
    outline-offset: -2px; */
    margin: 40px 0px 40px;
    z-index: 1;
`

export const CardItems = styled.ul`
    margin-bottom: 24px;
    /* outline: solid red;
    outline-offset: -2px; */

    @media only screen and (min-width: 1024px) {
      display: flex;
    }
`

const EvaluationSection = () => {
    return (
        <>
            <CardContainer>
                <CardWrapper>
                    <CardItems>
                        <CardItem 
                            src= {cow}
                            heading='Ethical Reasons'
                            path='/services'
                            text='We are not here to judge (and meat is so tasty) but 
                            cultured meat could ultimately limit the suffering imposed 
                            on animals. Mosa Meats predicts that the number of cows 
                            could drop from 1.2 billion to around 30,000 if cultured 
                            meat becomes accepted.'
                        />
                        <CardItem 
                            src={environment}
                            heading='Environment Reasons'
                            text='Experts agree that our current farming techniques are very environmentally demanding and unsustainable. In contrast, cultured meat could be much cleaner from an environmental point of view'
                            label='Tech+Ethics'
                            path='/services'
                        />
                        <CardItem 
                            src= {antibody}
                            heading='Health Reasons'
                            text='you do not need any antibiotics to make cultred as cell culture is a sterile process. This means that we will be able to limit the overuse of antibiotics, which leads to the selection of antibiotics-resistanct pathogens. It also means that the meat will be free of pathogens like Salmonelia or Listeria.'
                        />
                        {/* <h1><FaPlus color='green'/> Health Benefits </h1>
                        <h1><FaMinus color='red'/> Hi Bruce </h1>
                        <h1>Hi Charles</h1> */}
                        {/* <CardItem>
                        <h1>hello</h1>
                        </CardItem> */}

                    </CardItems>
                    <CardItems>
                        <CardItemRed 
                            src= {factory}
                            heading='Scale'
                            path='/services'
                            text='A single burger requires billions of cells and scaling up the process comes with hurdles. A new procedure uses a 25,000 L reaction with microcarrier beads to imporve cells growth in all directions'
                        />
                        <CardItemRed 
                            src={meat}
                            heading='Costs'
                            text='The first cultured burger cost 250,000 euro in 2013 but the efficiency and scale of the the technique have been refined since. Mosa Meat estimates that the same burger could arrive on the market in 3-4 years and cost about 10 euros.'
                            label='Tech+Ethics'
                            path='/services'
                        />
                        <CardItemRed 
                            src= {society}
                            heading='Tast and acceptance'
                            text='This is the big questions. Will the public accept to eat in vitro grown meat or will it consider it unnatural or even unsafe? A lot of effort is currently being made to make the process as transparent as possible to gain the trust of the public. In addition, many regulations will be put in place to ensure the quality of the meat.'
                        />
                        {/* <h1><FaPlus color='green'/> Health Benefits </h1>
                        <h1><FaMinus color='red'/> Hi Bruce </h1>
                        <h1>Hi Charles</h1> */}
                        {/* <CardItem>
                        <h1>hello</h1>
                        </CardItem> */}

                    </CardItems>
                </CardWrapper>
                {/* <Heading></Heading> */}
            </CardContainer>
        </>
    )
}

export default EvaluationSection
