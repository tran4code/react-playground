import React from 'react'
import GraphMeat from '../components/graph-section'
import EvaluationSection from '../components/pro-con'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'


const Home = () => {

    return (
        <>
            {/* <GraphMeat></GraphMeat> */}
            <InfoSection {...homeObjOne}/>
            <EvaluationSection />
        </>
    )
}

export default Home
