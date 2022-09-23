import React from 'react'

import thumbnail from '../assets/img/img1.jpg'

const NormalFilter = ({filterClass, setFilterClass, imgRef}) => {

    const applyFilterClass = () => {
        setFilterClass('filter-normal');
        // console.log(filter);
        const style = `contrast(100%) brightness(100%) saturate(100%) sepia(0%) grayScale(0%)`

        const divImg = imgRef.current
        divImg.video.style.filter = style
    }
    return (
        <div  style={{width: '30px'}}>
            <div
                className={`filter-item ${filterClass === 'filter-normal' ? 'filter-item--selected' : ''}`}
                onClick={() => applyFilterClass()}
            >
                <div className='filter-item__img'>
                    <img
                        src={thumbnail}
                        alt='Normal'
                    />
                </div>
                <div className='filter-item__name'>
                    <p><strong>Normal</strong></p>
                </div>
            </div>
        </div>
    )
}

export default NormalFilter
