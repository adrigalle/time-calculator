import Total from './Total';
import UserInput from './UserInput';
import UserButtons from './UserButtons';


function Calculator() {
    return (
        <div className='calculator-board'>
            <h1>This is the board</h1>
            <Total />
            <UserInput />
            <UserButtons />
        </div>
    )
}

export default Calculator;