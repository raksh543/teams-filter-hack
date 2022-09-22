import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import ImgWrapper from '../components/ImgWrapper'
import CustomFilterOptions from '../components/CustomFilterOptions';
import Filters from '../components/Filters'

import NormalFilter from '../components/NormalFilter'
import CustomFilter from '../components/CustomFilter'
import VideoPlayer from '../components/VideoPlayer';
import Webcam from "react-webcam";
import headerImg from '../assets/img/header.png';
import rightTab from '../assets/img/rightTab.png';

const HomeStyles = styled.div`
    background-color: #201F1F;
    color: #F1D8C4;
    width: 100%;
    height: 100vh;
    .filters-container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
`

const cameraWidth = 720;
const cameraHeight = 720;
const aspectRatio = cameraWidth / cameraHeight;

const videoConstraints = {
    width: {
        min: cameraWidth
    },
    height: {
        min: cameraHeight
    },
    aspectRatio
};

const Home = () => {

    const [filterClass, setFilterClass] = useState('filter-normal')
    const [openCustom, setOpenCustom] = useState(false)

    const imgRef = useRef(null)
    const webcamRef = useRef();
    console.log("loggg:::", imgRef);
    useEffect(() => { console.log("hey") }, [imgRef]);
    return (
        <HomeStyles>
            <img src={headerImg} style={{height: '40px'}}/>
            <Title />
            {/* <Webcam
                filterClass={filterClass}
                openCustom={openCustom}
                ref={imgRef}
                imgRef={webcamRef} videoConstraints={videoConstraints} width={cameraWidth} height={cameraHeight}
            /> */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', objectFit: 'cover', alignItems: 'center'}}>
            <ImgWrapper
                filterClass={filterClass}
                openCustom={openCustom}
                imgRef={imgRef}
            />
            
            <img src={rightTab} style={{height: '350px', width :'400px'}}/>
            </div>
            <br/>
            <br/>
            <div className='filters-container'>
                <NormalFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    imgRef={imgRef}
                />
                <Filters
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    imgRef={imgRef}
                />
                <CustomFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    setOpenCustom={setOpenCustom}
                />
            </div>
        </HomeStyles>
    )
}

export default Home
