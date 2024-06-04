import React from 'react';

const CompA = ({a}) => {

    const handleSubmit =()=>{
        a=a+1;
        console.log(a);
    }

    return (
        <>
           <h2>The props value is : {a}</h2> 

           <button onClick={handleSubmit}>Add</button>
        </>
    );
};

export default CompA;