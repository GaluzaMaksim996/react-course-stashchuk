import {useState} from "react";
import {generateRandomNum} from "../utils/generateRandomNum";

function RandomNumber({maxNum}) {
  const [randomNumber, setRandomNumber] = useState(generateRandomNum(maxNum))

  const changeRandomNum = () => {
    setRandomNumber(generateRandomNum(maxNum))
  }

  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate random number!!</button>
    </div>
  )
}

export default RandomNumber;