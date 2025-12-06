import { configureStore } from "@reduxjs/toolkit";
import grammarReducer from "./grammarSlice";
import conversationReducer from "./conversationSlice";

export const store = configureStore({
  reducer: {
    grammar: grammarReducer,
    conversation: conversationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
