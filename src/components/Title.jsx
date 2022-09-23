import React from 'react'
import styled from 'styled-components'

import { MdFilterVintage } from 'react-icons/md';
import teamsImg from '../assets/img/teamsImg.png'

const TitleStyles = styled.div`
    text-align: center;
    color: #FFF;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    span {
        display: flex;
        font-size: 22px;
        font-weight: 900;
        justify-content: center;
        gap: 1rem;
        width: fit-content;
        margin: auto;
        text-align: center;
        // padding: 2rem;
        color: #FFF;
        background: #FFF;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        span {
            svg {
                width: auto;
            }
        }
    }

`

const Title = () => {
    return (
        <TitleStyles>
            {/* <span>Choose your audio and video settings for</span> */}
            <span className='title'><span><img src={teamsImg} style={{ width: '28px' }} /></span>Meeting in "General"</span>
        </TitleStyles>
    )
}

export default Title
