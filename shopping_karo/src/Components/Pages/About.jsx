import React, { useState } from 'react'
import AboutComponent from '../Component/AboutComponent'

const About = () => {
  return (
    <section className="about-page">
      <AboutComponent />
    {/* <Calculator /> */}

    </section>
  )
}

export default About






// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState(0);

//   const handleClick = (value) => {
//     if (value === '=') {
//       try {
//         setResult(eval(input));
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setInput('');
//       setResult(0);
//     } else {
//       setInput((prevInput) => prevInput + value);
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={() => handleClick('7')}>7</button>
//         <button onClick={() => handleClick('8')}>8</button>
//         <button onClick={() => handleClick('9')}>9</button>
//         <button onClick={() => handleClick('/')}>/</button>
//         <button onClick={() => handleClick('4')}>4</button>
//         <button onClick={() => handleClick('5')}>5</button>
//         <button onClick={() => handleClick('6')}>6</button>
//         <button onClick={() => handleClick('*')}>*</button>
//         <button onClick={() => handleClick('1')}>1</button>
//         <button onClick={() => handleClick('2')}>2</button>
//         <button onClick={() => handleClick('3')}>3</button>
//         <button onClick={() => handleClick('-')}>-</button>
//         <button onClick={() => handleClick('0')}>0</button>
//         <button onClick={() => handleClick('.')}>.</button>
//         <button onClick={() => handleClick('=')}>=</button>
//         <button onClick={() => handleClick('+')}>+</button>
//         <button onClick={() => handleClick('C')}>C</button>
//       </div>
//     </div>
//   );
