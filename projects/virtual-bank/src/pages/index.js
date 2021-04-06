import React from 'react'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {

    // const [isOpen, setIsOpen] = useState(false);

    /**
     * Create a function that updates the state
     */
    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }
    return (
        <>
            <Navbar/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
        </>
    )
}

export default Home
