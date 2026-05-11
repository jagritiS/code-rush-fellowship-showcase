// React converted logic code!
import { useState } from 'react'
// import Counter from './Counter'
// import Toggle from './Toggle'
// import Todo from './Todo'
// import CharCount from './CharCount'
// import Filter from './Filter'
// import Random from './Random'
// import Theme from './Theme'
// import InputConsole from './InputConsole'
// import Calculator from './Calculator'
import ButtonTracker from './ButtonTracker'
import LiveClock from './LiveClock'
import TimeGreeting from './TimeGreeting'
import DisableButton from './DisableButton'
import Form from './Form'
import TabSystem from './TabSystem'
import API_Fetch from './API_Fetch'
import CheckBox from './CheckBox'
import CountTimer from './countTimer'

function App() {

  // TASK 9: Empty Check State
  // const [emptyInput, setEmptyInput] = useState("");
  // const handleEmptySubmit = () => {
  //   if (emptyInput.trim() === "") {
  //     alert("Input is empty");
  //   } else {
  //     console.log(emptyInput);
  //   }
  // };

  return (
    <>
      {/* <Theme />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <Todo />
      <hr />
      <InputConsole />
      <hr />

      <div>
        <h3>Empty Checker</h3>
        <input type="text" value={emptyInput} onChange={(e) => setEmptyInput(e.target.value)} />
        <button onClick={handleEmptySubmit}>Submit</button>
      </div>
      <hr /> */}


      {/* <Calculator />
      <hr />
      <CharCount />
      <hr />
      <Filter />
      <hr />
      <Random />
      <hr /> */}
      <ButtonTracker />
      <hr />
      <LiveClock />
      <hr />
      <TimeGreeting />
      <hr />
      <DisableButton />
      <hr />
      <Form />
      <hr />
      <TabSystem />
      <hr />
      <API_Fetch />
      <hr />
      <CheckBox />
      <hr />
      <CountTimer />
      <hr />
    </>
  )
}

export default App
