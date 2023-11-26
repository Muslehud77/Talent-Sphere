
import useSelected from '../../Hooks/useSelected';

const ContestDetail = () => {

    
    const [selected, setSelected] = useSelected();
    


    if(!selected) return <></>

    
    return (
        <div  className='fixed inset-0 bg-black/50 h-screen z-50 cursor-pointer overflow-y-auto'>
            
        </div>
    );
};

export default ContestDetail;