import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import resortBrazil from '../images/resort-brazil.jpg';
import eiffelTower from '../images/eiffel-tower-paris.jpg';
import castleEdinburgh from '../images/castle-scotland.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out some of our offers!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem 
                            src={resortBrazil}
                            text="Take a well deserved break at this marvellous tropical resort in Brazil"
                            label='Relaxation'
                            path='/offers'
                        />
                        <CardItem 
                            src={eiffelTower}
                            text="Visit the city of love and don't miss out the opportunity to go all the way up to the Eiffel Tower"
                            label='Tourism'
                            path='/offers'
                        />
                        <CardItem 
                            src={castleEdinburgh}
                            text="Fancy exploring historical places and get to immerse in a different culture? This is for you!"
                            label='Cultural'
                            path='/offers'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;