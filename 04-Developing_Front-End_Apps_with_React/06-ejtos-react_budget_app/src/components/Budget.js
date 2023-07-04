import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency, remaining } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditBudget = (e)=>{
        if (e.target.value > 20000) {
            alert("The value can't exceed remaining funds "+ currency + remaining );
            console.log(budget)
            console.log("The value can't exceed remaining funds "+ currency + remaining );
        }
        else if (e.target.value < totalExpenses) {
            alert("You can't reduce the budget value lower than the spending");
            console.log("You can't reduce the budget value lower than the spending");
        }
        else {
            dispatch({type: "SET_BUDGET", payload: e.target.value});       
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}</span><input type="number" step={10} value={budget} onChange={handleEditBudget}/>
        </div>
    );
};

export default Budget;
