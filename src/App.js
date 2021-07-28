import { useState, useEffect } from 'react';
import './App.css';

const Header = () => {
  return (
    <div className='header'>
      Battle Pet Flipbook
    </div>
  )
}

const PetCard = ({ pet }) => {
  const servers = ['moon-guard', 'illidan', 'stormrage', 'area-52', 'bleeding-hollow'];

  const { image, name, serverPrices } = pet;
  return (
    <div className='petcontainer'>
      <div className='image'>{image}</div>
      <div className='name'>{name}</div>
      {servers.map(server => <div className='server'>{serverPrices[server]}</div>)}
    </div>
  )
}
const App = () => {
  const [petData, setPetData] = useState([]);
  const servers = ['moon-guard', 'illidan', 'stormrage', 'area-52', 'bleeding-hollow'];
  useEffect(() => {
    console.log('make query');
    setPetData([
      {
        'image': 'image',
        'name': 'Anubiseth Idol',
        'serverPrices': {
          'moon-guard': 1000,
          'illidan': 2000,
          'stormrage': 3000,
          'area-52': 4000,
          'bleeding-hollow': 5000,
        }
      },
      {
        'image': 'image',
        'name': 'Chrominious',
        'serverPrices': {
          'moon-guard': 1000,
          'illidan': 5000,
          'stormrage': 4000,
          'area-52': 3000,
          'bleeding-hollow': 2000,
        }
      }
    ])
  }, [])

  return (
    <div className="App">
      <Header />
      <div className='serverlist'>
        {servers.map(server => <div >{server}</div>)}
      </div>
      {petData.map(pet => <PetCard pet={pet} />)}
    </div>
  );
}

export default App;
