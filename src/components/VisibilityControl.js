import React from 'react';

export const VisibilityControl = (props) => {
    return (
        <div className="form-check">
            <input 
            type="checkbox" 
            className="form-check-input"
            checked={props.isChecked}//Always true
            onChange={e => props.callback(e.target.checked)}//Pass the event to the function
            />
            <label htmlFor="form-check-label">
                Show {props.description}
            </label>            
        </div>
    )
}

