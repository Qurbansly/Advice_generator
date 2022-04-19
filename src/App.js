import AdviceGenerator from './components/AdviceGenerator/AdviceGenerator'
import { useEffect, useState } from 'react'

function App() {

  const [advice, setAdvice] = useState('')

  const getAdvice = async () => {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => setAdvice(data.slip))
  }

  useEffect(() => {
    getAdvice()
  }, [])


  return (
    <AdviceGenerator
    id={advice.id}
    text={advice.advice}
    getAdvice={getAdvice}
    />
  );
}

export default App;
