import './App.css'
import useCalculator from './hooks/useCalculator'
import { Toaster } from 'react-hot-toast'

function App() {
  const {
    handleNumBtn,
    handleOperatorBtn,
    handleDecimalBtn,
    handleCalculateBtn,
    handleClearBtn,
    handleMemoryAdd,
    handleMemoryRead,
    input
  } = useCalculator()

  return (
    <div className='Calculator'>
      <Toaster />
      <h1>Calculator</h1>
      <div className='calculator'>
        <input type='text' value={input} disabled className='display' />
        <button onClick={handleClearBtn} className='button button__clear'>
          C
        </button>
        <button onClick={handleMemoryAdd} className='button button__memory'>
          M+
        </button>
        <button onClick={handleMemoryRead} className='button button__memory'>
          MR
        </button>
        <button name='/' onClick={handleOperatorBtn} className='button button__operator'>
          ÷
        </button>
        <button name='7' onClick={handleNumBtn} className='button button__number'>
          7
        </button>
        <button name='8' onClick={handleNumBtn} className='button button__number'>
          8
        </button>
        <button name='9' onClick={handleNumBtn} className='button button__number'>
          9
        </button>
        <button name='*' onClick={handleOperatorBtn} className='button button__operator'>
          ×
        </button>
        <button name='4' onClick={handleNumBtn} className='button button__number'>
          4
        </button>
        <button name='5' onClick={handleNumBtn} className='button button__number'>
          5
        </button>
        <button name='6' onClick={handleNumBtn} className='button button__number'>
          6
        </button>
        <button name='-' onClick={handleOperatorBtn} className='button button__operator'>
          -
        </button>
        <button name='1' onClick={handleNumBtn} className='button button__number'>
          1
        </button>
        <button name='2' onClick={handleNumBtn} className='button button__number'>
          2
        </button>
        <button name='3' onClick={handleNumBtn} className='button button__number'>
          3
        </button>
        <button name='+' onClick={handleOperatorBtn} className='button button__operator'>
          +
        </button>
        <button name='0' onClick={handleNumBtn} className='button button__number button__zero'>
          0
        </button>
        <button name='.' onClick={handleDecimalBtn} className='button button__decimal'>
          .
        </button>
        <button name='=' onClick={handleCalculateBtn} className='button button__equal'>
          =
        </button>
      </div>
    </div>
  )
}

export default App
