import React, { useState, useEffect } from 'react';

function Clocks() {
    const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			console.log('watching');
			setDateState(new Date());
		}, 30000);
	}, []);
    return (
        <div style={{fontFamily:'ubuntu',fontSize:'35px',fontWeight:'bolder'}}>
    		
				{dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
			<br/>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}
	    </div>
    )
}

export default Clocks
