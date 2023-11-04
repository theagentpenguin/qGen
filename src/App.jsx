import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState([]);

  const fetchQuote = async() => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    //console.log(data);
    setContent(data.content);
    return data;
  }

  return (
    <>
    <h1>Random Quote Generator!</h1> 
    
    <div class='quote'>{content}</div>
    <button onClick={fetchQuote}>click for another one</button>     
    </>
  )
}

export default App
