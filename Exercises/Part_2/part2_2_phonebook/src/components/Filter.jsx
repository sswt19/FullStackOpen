import React from "react";

const Filter = ({ searchName, handleChangeInSearchName }) => {
    return (
        <div>
            filter shown with:
            <input value={searchName} onChange={handleChangeInSearchName} />
        </div>
    );
};
export default Filter