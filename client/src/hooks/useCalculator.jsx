import { useState } from 'react'
import { lastCharIsOperator, lastCharIsDecimal } from '../utils/helpers.js'
import axios from 'axios'
import toast from 'react-hot-toast'

function useCalculator() {
  const [input, setInput] = useState('0')
  const [decimalState, setDecimalState] = useState(false)

  function handleNumBtn(e) {
    if (input === '0') setInput('')
    setInput((prev) => prev + e.target.name)
  }

  function handleOperatorBtn(e) {
    if (input === '0') setInput('0' + e.target.name)
    if (lastCharIsOperator(input)) {
      setInput(input.slice(0, -1) + e.target.name)
      return
    }
    if (decimalState && lastCharIsDecimal(input)) {
      setDecimalState(false)
      setInput(input.slice(0, -1) + e.target.name)
      return
    }
    if (decimalState) {
      setDecimalState(false)
    }
    setInput(input + e.target.name)
  }

  function handleDecimalBtn(e) {
    if (decimalState || lastCharIsOperator(input)) return
    if (input === '0') {
      setDecimalState(true)
      setInput('0' + e.target.name)
      return
    }
    setDecimalState(true)
    setInput(input + e.target.name)
  }

  function handleClearBtn() {
    setInput('0')
    setDecimalState(false)
  }

  function handleCalculateBtn() {
    setInput(eval(input).toString())
    if (input.includes('.')) return
    setDecimalState(false)
  }

  async function handleMemoryAdd() {
    try {
      const number = input.match(/^\d+/)
      await axios.put('http://localhost:8000/api/memory-add', {
        number: number[0]
      })
      toast('Number successfully saved to memory', {
        style: {
          backgroundColor: '#34e065',
          color: '#379634'
        }
      })
    } catch (err) {
      console.error(err)
      toast('Oops! Something went wrong while trying to save to memory', {
        style: {
          backgroundColor: '#b00020',
          color: '#fff'
        }
      })
    }
  }

  async function handleMemoryRead() {
    try {
      const response = await axios.get('http://localhost:8000/api/memory-read')
      const { number } = response.data
      setInput(number)
      setDecimalState(false)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    handleNumBtn,
    handleOperatorBtn,
    handleDecimalBtn,
    handleCalculateBtn,
    handleClearBtn,
    handleMemoryAdd,
    handleMemoryRead,
    input
  }
}

export default useCalculator
