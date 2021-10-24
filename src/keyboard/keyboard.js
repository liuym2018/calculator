import { useState } from 'react';
import './keyboard.css';

function Keyboard() {
    let [preValue, setPreValue] = useState('');
    let [nextValue, setNextValue] = useState('');
    const [oprator, setoprator] = useState('');
    const [result, setResult] = useState(0);

    const handleOperation = (e) => {
        let curr = e.target.value;

        if (curr === 'C') {
            setPreValue('');
            setNextValue('');
            setoprator('');
            setResult(0);
        } else if (curr === 'Del') {
            if (nextValue === '' && preValue.length > 0) {
                preValue = preValue.substring(0, preValue.length - 1);
                const num = preValue.length === 0 ? 0 : preValue;
                setPreValue(preValue);
                setResult(num);
            } else if (nextValue.length > 0) {
                nextValue = nextValue.substring(0, nextValue.length - 1);
                const num = nextValue.length === 0 ? 0 : nextValue;
                setNextValue(nextValue);
                setResult(num);
            }

        } else if (curr === '.') {
            if (nextValue === '') {
                preValue += '.';
                setPreValue(preValue);
                setResult(preValue);
            } else {
                nextValue += '.';
                setNextValue(nextValue);
                setResult(nextValue);
            }
        } else if (curr === '%') {
            setoprator(curr);
        } else if (curr === '+') {
            if (oprator === '') {
                setoprator(curr);
            } else {
                handleOperations(preValue, nextValue, curr);
                setoprator(curr);
            }
        } else if (curr === '-') {
            if (oprator === '') {
                setoprator(curr);
            } else {
                handleOperations(preValue, nextValue, curr);
                setoprator(curr);
            }
        } else if (curr === '*') {
            if (oprator === '') {
                setoprator(curr);
            } else {
                handleOperations(preValue, nextValue, curr);
                setoprator(curr);
            }
        } else if (curr === '/') {
            if (oprator === '') {
                setoprator(curr);
            } else {
                handleOperations(preValue, nextValue, curr);
                setoprator(curr);
            }
        } else if (curr === '=') {
            setoprator(curr);
            handleOperations(preValue, nextValue, curr);
        } else {
            handleNumbers(curr, oprator);
        }
    };

    function handleNumbers(value, oprator) {
        if (oprator === '') {
            if (preValue === '') {
                setPreValue(value);
                setResult(value);
            } else if (preValue !== '') {
                value = preValue + value;
                setPreValue(value);
                setResult(value);
            }
        } else {
            if (nextValue === '') {
                setNextValue(value);
                setResult(value);
            } else if (nextValue !== '') {
                value = nextValue + value;
                setNextValue(value);
                setResult(value);
            }
        }
    }

    function handleOperations(prev, next, op) {
        let nums = 0;
        if (op === '+') {
            if (next !== '') {
                nums = prev + next;
                setPreValue(nums);
                setResult(nums);
            }
            setoprator(op);
        } else if (op === '-') {
            if (next !== '') {
                nums = prev - next;
                setPreValue(nums);
                setResult(nums);
            }
            setoprator(op);
        } else if (op === '*') {
            if (next !== '') {
                nums = prev * next;
                setPreValue(nums);
                setResult(nums);
            }
            setoprator(op);
        } else if (op === '/') {
            if (next !== '') {
                nums = prev / next;
                setPreValue(nums);
                setResult(nums);
            }
            setoprator(op);
        } else if (op === '=') {
            nums = nums === 0 ? (oprator === '+' ? Number(prev) + Number(next) : (oprator === '-' ? Number(prev) - Number(next) :
                (oprator === '*' ? Number(prev) * Number(next) : Number(prev) - Number(next)))) : nums;
            setResult(nums);
            setPreValue('');
            setNextValue('');
            setoprator('');
        }
    }

    return (
        <div className="Keyboard">
            <div className="calculator-input">
                <div className="result">{result} </div>
            </div>
            <div className="row">
                <button value={"C"} onClick={e => handleOperation(e, "value")}>C</button>
                <button value={'%'} onClick={e => handleOperation(e, "value")}>%</button>
                <button value={'Del'} onClick={e => handleOperation(e, "value")}>Del</button>
                <button value={'+'} onClick={e => handleOperation(e, "value")}>+</button>
            </div>
            <div className="row">
                <button value={'7'} onClick={e => handleOperation(e, "value")}>7</button>
                <button value={'8'} onClick={e => handleOperation(e, "value")}>8</button>
                <button value={'9'} onClick={e => handleOperation(e, "value")}>9</button>
                <button value={'-'} onClick={e => handleOperation(e, "value")}>-</button>
            </div>
            <div className="row">
                <button value={'4'} onClick={e => handleOperation(e, "value")}>4</button>
                <button value={'5'} onClick={e => handleOperation(e, "value")}>5</button>
                <button value={'6'} onClick={e => handleOperation(e, "value")}>6</button>
                <button value={'*'} onClick={e => handleOperation(e, "value")}>*</button>
            </div>
            <div className="row">
                <button value={'1'} onClick={e => handleOperation(e, "value")}>1</button>
                <button value={'2'} onClick={e => handleOperation(e, "value")}>2</button>
                <button value={'3'} onClick={e => handleOperation(e, "value")}>3</button>
                <button value={'/'} onClick={e => handleOperation(e, "value")}>/</button>
            </div>
            <div className="row">
                <button value={'0'} onClick={e => handleOperation(e, "value")}>0</button>
                <button value={'.'} onClick={e => handleOperation(e, "value")}>.</button>
                <button value={'='} onClick={e => handleOperation(e, "value")}>=</button>
            </div>
        </div>
    );
}

export default Keyboard;
