import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ConversationGroup } from "../types/types";

export const fetchConversationData = createAsyncThunk<
  ConversationGroup[],
  void,
  { rejectValue: string }
>("conversation/fetchData", async () => {
  const res = await fetch(
    "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/conversation/conversationData.json"
  );
  if (!res.ok) throw new Error("Failed to fetch conversations");
  return res.json();
});

const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    data: [] as ConversationGroup[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConversationData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchConversationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default conversationSlice.reducer;
