import React from 'react'
import ActorCard from './ActorCard';
import img from '../asset/not-found.png';
const ActorGrid = ({ data }) => {
    return (
        <div>
            {data.map(({ person }) => (
                <ActorCard
                    key={person.id}
                    // id={person.id}
                    name={person.name}
                    image={person.image ? person.image.medium : img}
                    country={person.country ? person.country : null}
                    birthday={person.birthday}
                    deathday={person.deathday}
                    gender={person.gender}
                />
            ))}
        </div>
    )
}

export default ActorGrid;
// result.map((item) => <div key={item.person.id}>{item.person.name}</div>)