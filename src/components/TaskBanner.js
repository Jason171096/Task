import React from 'react';

export const TaskBanner = (props) => {
    return (
        <h4 className='bg-primary text-white text-center p-4'>
            {/* Pass the username and filter amount missing tasks */}
            {props.userName}'s task app ({props.taskItems.filter(t => !t.done).length} tasks to do)
        </h4>
    )
}
