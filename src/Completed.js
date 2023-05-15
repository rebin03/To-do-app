
import React from 'react'

function Completed(toDos) {
    return (
        <div className="completed">
            <h2><u>Completed Tasks:</u></h2>
            {toDos
                .filter((obj) => obj.status) // Filter tasks with status = true
                .map((obj) => (
                    <div key={obj.id}>
                        <h3>{obj.text}</h3>
                    </div>
                ))
            }
        </div>
    )
}



export default Completed