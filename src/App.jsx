import { useState } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import data from './Components/Data';

const App = () => {

  const [travels, setTravels] = useState(data);

  return (
    <main>
      <Header />
      <MainContent travels={travels} />
    </main>
  )
}

export default App;
