import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchGrammarData } from '../store/grammarSlice';

export const useGrammar = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.grammar);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchGrammarData() as any);
    }
  }, [dispatch, data.length]);

  return { grammarData: data, loading, error };
};
