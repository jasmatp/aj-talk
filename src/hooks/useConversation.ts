import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversationData } from '../store/conversationSlice';
import { RootState, AppDispatch } from '../store';

export const useConversation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.conversation
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchConversationData());
    }
  }, [dispatch, data.length]);

  return { conversationData: data, loading, error };
};
