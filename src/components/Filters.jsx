import React, { useEffect } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import thumbnail from '../assets/img/img1.jpg'

import '../styles/instagram.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FiltersStyles = styled.div`
    width: 70%;
    margin: auto;
    .slick-prev:before{
        color: var(--blue-1);
    } 
    .slick-next:before {
        color: var(--blue-1);
    }
`
const Filters = ({ filterClass, setFilterClass, imgRef }) => {

    useEffect(() => {
        // const divImg = imgRef.current;
        // console.log("checjkkkk::", filterClass);
        // divImg.video.style.filter = '';
    }, [filterClass])

    const filters = [
        {
            name: 'Aden',
            class: 'filter-aden',
            property: {
                sepia: 20, brightness: 115, saturate: 140, gray: 0, contrast:100,
            }
        },
        {
            name: 'Amaro',
            class: 'filter-amaro',
            property: {
                sepia:35, contrast:110, brightness:120, saturate:130, gray: 0
            }
        },
        {
            name: 'Ashby',
            class: 'filter-ashby',
            property: {
                sepia:50, contrast:120, brightness:100, saturate:180, gray: 0
            }
        },
        {
            name: 'Brannan',
            class: 'filter-brannan',
            property: {
                sepia:25, contrast:125, brightness:125, saturate:90, gray: 0, hueRotate: '-2deg',
            }
        },
        {
            name: 'Brooklyn',
            class: 'filter-brooklyn',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:100, gray: 0, hueRotate: '5deg'
            }
        },
        {
            name: 'Charmes',
            class: 'filter-charmes',
            property: {
                sepia:25, contrast:125, brightness:125, saturate:135, gray: 0, hueRotate:'-5deg',
            }
        },
        {
            name: 'Clarendon',
            class: 'filter-clarendon',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Crema',
            class: 'filter-crema',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Dogpatch',
            class: 'filter-dogpatch',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Earlybird',
            class: 'filter-earlybird',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Gingham',
            class: 'filter-gingham',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Ginza',
            class: 'filter-ginza',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Hafe',
            class: 'filter-hafe',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Helena',
            class: 'filter-helena',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Hudson',
            class: 'filter-Inkwell',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Inkwell',
            class: 'filter-inkwell',
            property: {
                brightness: 1.25, contrast: .85, gray: 1, sepia:.0, saturate: 1
            }
        },
        {
            name: 'Kelvin',
            class: 'filter-kelvin',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Lark',
            class: 'filter-lark',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Lo-fi',
            class: 'filter-lofi',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Ludwing',
            class: 'filter-ludwing',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Maven',
            class: 'filter-maven',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Mayfair',
            class: 'filter-mayfair',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Moon',
            class: 'filter-moon',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Nashville',
            class: 'filter-nashvile',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Perpetua',
            class: 'filter-perpetua',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Poprocket',
            class: 'filter-poprocket',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Reyes',
            class: 'filter-reyes',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Rise',
            class: 'filter-rise',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Sierra',
            class: 'filter-sierra',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Skyline',
            class: 'filter-skyline',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Slumber',
            class: 'filter-slumber',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Stinson',
            class: 'filter-stinson',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Sutro',
            class: 'filter-sutro',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Toaster',
            class: 'filter-toaster',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Valencia',
            class: 'filter-valencia',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Vesper',
            class: 'filter-vesper',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Walden',
            class: 'filter-walden',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'Willow',
            class: 'filter-willow',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
        {
            name: 'X-Pro II',
            class: 'filter-xpro-ii',
            property: {
                sepia:.35, contrast:1.1, brightness:1.2, saturate:1.3, gray: 1
            }
        },
    ]

    const settings = {
        dots: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    }

    const applyFilterClass = (filter) => {
        setFilterClass(filter.class);
        console.log(filter);
        const style = `contrast(${filter.property.contrast}%) brightness(${filter.property.brightness}%) saturate(${filter.property.saturate}%) sepia(${filter.property.sepia}%) grayScale(${filter.property.gray}%)`

        const divImg = imgRef.current
        divImg.video.style.filter = style
    }

    return (
        <FiltersStyles>
            <Slider {...settings}>
                {
                    filters.map((filter, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className={`filter-item ${filterClass === filter.class ? 'filter-item--selected' : ''}`}
                                    onClick={() => applyFilterClass(filter)}
                                >
                                    <div className='filter-item__img'>
                                        <img
                                            className={filter.class}
                                            src={thumbnail}
                                            alt={filter.name}
                                        />
                                    </div>
                                    <div className='filter-item__name'>
                                        <p><strong>{filter.name}</strong></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </FiltersStyles>
    )
}

export default Filters
