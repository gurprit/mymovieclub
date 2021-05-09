import React, { useState } from 'react';

const ImageCard = ({movieData}) => {
    const { Title, Year, Director, Genre, Plot, } = movieData;

    return (
        <div className="movie-card">
            <h1>{Title}</h1>
        </div>

    )
}

export default ImageCard
