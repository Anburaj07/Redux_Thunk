import { addAction, reduceAction } from '../Redux/Counter/action';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const count=useSelector(store=>store.countReducer.count)
    const dispatch=useDispatch();

    const handleAdd=()=>{
        dispatch(addAction()) 
    }
    console.log('counter render')
    const handleReduce=()=>{
        dispatch(reduceAction())
    }

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleAdd}>Add</button>  
      <button onClick={handleReduce}>Reduce</button>  
    </div>
  )
}

export default Counter
