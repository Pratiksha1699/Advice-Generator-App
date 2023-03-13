import hline from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';
import React,{Component, useState, useEffect} from 'react'
import './App.css';

function App() {
	
	//state
	const [advice, setAdvice] = useState([]);
	const [adviceNo,setAdviceNo] = useState([]);
	const [url,setUrl] = useState('https://api.adviceslip.com/advice');
	
	const fetchAdvice = () => {
		fetch(url)
		.then(result => result.json())
		.then(data => (setAdviceNo(data.slip.id),setAdvice(data.slip.advice)))
		.catch(error => console.log(error));
	};
	useEffect(() => {
		fetchAdvice();
	}, [url]);
	
	
	const getAdvice = (e) => {
		//console.log("inside getAdvice",e);
		setUrl(`https://api.adviceslip.com/advice`);
		fetchAdvice();
	}
	
  return (
		
      <div className="adviceCard">
		<div className="adviceNo">Advice #{adviceNo}</div>
		<div className="advice"><q>{advice}</q></div>
		<div className="hline"><img src={hline} className="App-patterndivider" alt="patterndivider" /></div>
		<div className="dice" onClick={getAdvice}><center><img src={dice} className="App-dice" alt="App-dice" /></center></div>
	  </div>
  );
}

export default App;