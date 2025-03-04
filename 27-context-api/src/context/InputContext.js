import {createContext} from "react";

const InputContext = createContext({
  value: '',
  setValue: () => {},
})

export default InputContext