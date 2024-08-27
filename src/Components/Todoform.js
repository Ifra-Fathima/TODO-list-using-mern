import './Todoform.css';
import { useState } from 'react';

const Todoform=()=>{
    const[text,setText]=useState("");


    const onFormSubmit=()=>{
        
    }
    
    const onInputChange=(e)=>{
        setText(e.target.value);
    }

    return(
        <div>
            <form className="form" onSubmit={onFormSubmit}>
                <input type="text" placeholder='Enter a new todo...' 
                onChange={onInputChange}/>
                
            </form>
        </div>
    )
}

export default Todoform;