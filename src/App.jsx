import { useState } from "react"

const INITIAL_VALUE = ["A", "B", "C"]

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter]
    })
  }

  function removeAllElements() {
    setArray([])
  }

  function resetTheArray() {
    setArray(() => {
      return INITIAL_VALUE
    })
  }

  function turnCtoF() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element == "C") return "F"
        return element
      })
    })
  }

  function addLetterToIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        letter,
        ...currentArray.slice(index),
      ]
    })
  }

  return (
    <div>
      <br />
      <button onClick={removeFirstElement}>Remove first element</button>
      <br />
      <button onClick={() => removeSpecificElement("B")}>Remove All B</button>
      <br />
      <button onClick={() => addLetterToStart("D")}>Add a D to start</button>
      <br />
      <button onClick={() => addLetterToEnd("E")}>Add a E to end</button>
      <br />
      <button onClick={removeAllElements}>Remove All Elements</button>
      <br />
      <button onClick={resetTheArray}>Reset the array</button>
      <br />
      <button onClick={turnCtoF}>Turn every A to C</button>
      <br />
      <button onClick={() => addLetterToIndex("G", 2)}>Add G at index 2</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <br />
      <button onClick={() => addLetterToStart(value)}>Add it !</button>
      <br />
      <br />
      {array.join(" , ")}
    </div>
  )
}
export default App
