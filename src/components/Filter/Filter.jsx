import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input onChange={e => dispatch(filterChange(e.target.value))} type="text" />
  );
};
