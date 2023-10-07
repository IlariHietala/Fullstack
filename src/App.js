import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:3001'

function App() {

  const [message, setMessage] = useState('Waiting message from NodeJS backend...')

  useEffect(() => {
      axios.get(URL)
      .then(res => {
          setMessage(res.data.message)

      }).catch(error => {
        console.log(error)
        setMessage("Error retvieving data from NodeJS backend")
      })
  }, [])
  

  return (
    <p>{message}</p>
  );
}

export default App;