import React from 'react';
import usePaidRequested from '../../../../Api/usePaidRequested';

const PendingContests = () => {

    const {pendings} = usePaidRequested()
    console.log(pendings);
    return (
        <div>
            
        </div>
    );
};

export default PendingContests;