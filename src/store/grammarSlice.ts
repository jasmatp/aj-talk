import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GrammarLesson } from "../types/types";

export const fetchGrammarData = createAsyncThunk(
  "grammar/fetchData",
  async () => {
    const res = await fetch(
      "https://ydgxhfiiuzztmqfrzlhn.supabase.co/storage/v1/object/public/static-assets/grammar/grammarData.json"
    );
    return res.json();
  }
);

const grammarSlice = createSlice({
  name: "grammar",
  initialState: {
    data: [] as GrammarLesson[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrammarData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGrammarData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGrammarData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default grammarSlice.reducer;
