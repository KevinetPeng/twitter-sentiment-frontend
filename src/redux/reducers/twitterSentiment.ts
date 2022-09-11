import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface rawSentiment {
  compound: number;
  neg: number;
  neu: number;
  pos: number;
}

interface TwitterSentimentData {
  raw_sentiments: Array<rawSentiment>;
  raw_tweets: Array<String>;
  sample_size: number;
  sentiment_summary: {
    average_compound: number;
    num_negative: number;
    num_neutral: number;
    num_positive: number;
  };
}

interface TwitterSentimentState {
  data?: TwitterSentimentData;
  isLoading: boolean;
  error: any;
}

const initialState: TwitterSentimentState = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const twitterSentimentSlice = createSlice({
  name: "twitterSentiment",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TwitterSentimentData>) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setData, setIsLoading, setError } =
  twitterSentimentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.twitterSentiment.data;
export const selectError = (state: RootState) => state.twitterSentiment.error;
export const selectIsLoading = (state: RootState) =>
  state.twitterSentiment.isLoading;

export default twitterSentimentSlice.reducer;
