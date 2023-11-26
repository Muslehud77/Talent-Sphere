
import { useState } from 'react';

const useSelected = () => {
    const [selected,setSelected] = useState(null)
    console.log(selected);
    return [selected, setSelected];
};

export default useSelected;