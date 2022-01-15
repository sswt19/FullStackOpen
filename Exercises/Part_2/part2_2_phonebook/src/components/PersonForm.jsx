import React from "react";


const PersonForm = (props) => {
    const {personInfo,handleChangeInName,handleChangeInNumber,onSubmit}=props

    return (
    <form onSubmit={onSubmit}>
        <div>
            name: <input value={personInfo.name} onChange={handleChangeInName} />
        </div>
        <div>
            number: <input value={personInfo.number} onChange={handleChangeInNumber} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>)
}

export default PersonForm 