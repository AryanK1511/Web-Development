import React from 'react';

const Card = ({name, email, id}) => {
    // Destructuring
    // const {name, email, id} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;