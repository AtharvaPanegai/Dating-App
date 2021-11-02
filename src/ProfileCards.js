/** @format */

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./ProfileCards.css";

function ProfileCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
      name: "Jeff Bezos",
      url: "https://www.biography.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    },
    {
      name: "Mark Zuck",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete} `);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className='profilecards'>
      <div className='profilecards__container'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}>
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className='card'>
              <h3> {person.name} </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
