import React from 'react'
import './Artists.css'
import eleventhImg from '../Components/Images/art11.jpg'
import twelthImg from '../Components/Images/art12.jpg'
import thirteenthImg from '../Components/Images/art13.jpg'
import fourteenthImg from '../Components/Images/art14.jpg'
import fifteenthImg from '../Components/Images/art15.jpg'
import sixteenthImg from '../Components/Images/art16.jpg'
import seventeenthImg from '../Components/Images/art17.jpg'
import eigthteenthImg from '../Components/Images/art18.jpg'
import nineteenthImg from '../Components/Images/art19.jpg'
import twentyImg from '../Components/Images/art20.jpg'
import twentyoneImg from '../Components/Images/art21.jpg'
import twentytwoImg from '../Components/Images/art22.jpg'

function Artists() {
    return (
        <div>

            {/*div>
                <p>Sort by:</p>
                <select className='select-div'>
                    <option></option>
                    <option>Name Ascending</option>
                    <option>Name Descending</option>
                    <option>Date Ascending</option>
                    <option>Date Descending</option>
                </select>
    </div>*/}

            <div className='flex-container-artists'>
                <div><img src={eleventhImg} className='eleventhImg'></img><br />Mou Art Crafts</div>
                <div><img src={twelthImg} className='twelthImg'></img><br />Akula Raghu</div>
                <div><img src={thirteenthImg} className='thirteenthImg'></img><br />Colour in the box</div>
                <div><img src={fourteenthImg} className='fourteenthImg'></img><br />Rajkumari</div>
            </div>
            <div className='flex-container-artists'>
                <div><img src={fifteenthImg} className='fifteenthImg'></img><br />Coloured Canvas</div>
                <div><img src={sixteenthImg} className='sixteenthImg'></img><br />Dr SK Sharma</div>
                <div><img src={seventeenthImg} className='seventeenthImg'></img><br />Sunita Dinda</div>
                <div><img src={eigthteenthImg} className='eigthteenthImg'></img><br />REJIES ART CORNER</div>
            </div>
            <div className='flex-container-artists'>
                <div><img src={nineteenthImg} className='nineteenthImg'></img><br />Boby</div>
                <div><img src={twentyImg} className='twentyImg'></img><br />Reena Jain</div>
                <div><img src={twentyoneImg} className='twentyoneImg'></img><br />Raja Raghavan</div>
                <div><img src={twentytwoImg} className='twentytwoImg'></img><br />Love Prabjot</div>
            </div>
        </div>
    )
}

export default Artists
