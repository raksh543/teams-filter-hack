import React from 'react'
import styled from 'styled-components'

import { MdFilterVintage } from 'react-icons/md';
import teamsImg from '../assets/img/teamsImg.png'

const TitleStyles = styled.div`
    h2 {
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: fit-content;
        margin: auto;
        text-align: center;
        padding: 2rem;
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
            <h2 className='title'><span><img src={teamsImg} style={{width: '25px'}}/></span>Teams Meeting</h2>
        </TitleStyles>
    )
}

export default Title
