import React from 'react';
const StarRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => {
                const starClass =
                    rating >= index + 1
                        ? 'full-star'
                        : rating >= index + 0.5
                        ? 'half-star'
                        : 'empty-star';
                return <span key={index} className={`star ${starClass}`} />;
            })}
        </div>
    );
};

export default StarRating;
