import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Friend.css';

export default function Friend() {
  const { friend } = useParams();
  const [chosenFriend, setChosenFriend] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const friends = [
      {
        name: 'John',
        age: 21,
        country: 'Netherlands'
      },
      {
        name: 'Alex',
        age: 35,
        country: 'USA'
      },
      {
        name: 'Martha',
        age: 25,
        country: 'United Kingdom'
      },
    ];
    const foundFriend = friends.find((person) => person.name === friend);
    if (foundFriend) {
      setChosenFriend(foundFriend);
      setErrorMessage('');
    } else {
      setErrorMessage('You dont have such friend at the moment in your friend list');
    }
  }, [friend]);

  if (errorMessage) {
    return (
      <div class="alert alert-danger" role="alert">
          {errorMessage}
      </div>
    )
  }

  if (!chosenFriend) {
    return (
      <h1>
        Choose your friend
      </h1>
    )
  }

  return (
    <div class="card">
      <img src={`https://via.placeholder.com/350x150?text=${chosenFriend.name}`} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{chosenFriend.name}</h5>
        <p class="card-text">
          <strong>Age</strong>: {chosenFriend.age}
          <br />
          <strong>Country</strong>: {chosenFriend.country}
        </p>
      </div>
    </div>
  )
}