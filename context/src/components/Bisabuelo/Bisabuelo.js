import { useState } from 'react';
import Abuelo from '../Abuelo/Abuelo';
import { ColorContext } from '../../context/ColorContext';

const Bisabuelo = () => {
  const [colorNieto, setColorNieto] = useState('blue');

  return (
    <div>
      Bisabuelo
      <ColorContext.Provider value={colorNieto}>
        <Abuelo />
      </ColorContext.Provider>
    </div>
  )
}

export default Bisabuelo