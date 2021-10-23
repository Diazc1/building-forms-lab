import React from 'react';

const Bands = props => {
    //write the necessary code to display each band name from the store
    //band names should be listed in individual li elements
    const bands = props.bands.map((band, index) => {
        return <li key={index}>{band.name}</li>;
    });

    return (
        <div>
        {bands}
        </div>
    );

};

export default Bands;