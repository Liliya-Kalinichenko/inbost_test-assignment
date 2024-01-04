import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Option } from "../types/Option";

export interface NodeState {
  currentOption: Option | null;
  isSelectOpen: boolean;
}

const initialState: NodeState = {
  currentOption: null,
  isSelectOpen: false,
};

export const nodeFourSlice = createSlice({
  name: "nodeFour",
  initialState,
  reducers: {
    setCurrentOption: (state, action: PayloadAction<Option | null>) => {
      state.currentOption = action.payload;
    },
    setIsSelectOpen: (state, action: PayloadAction<boolean>) => {
      state.isSelectOpen = action.payload;
    },
  },
});

export const { setCurrentOption, setIsSelectOpen } = nodeFourSlice.actions;

export default nodeFourSlice.reducer;
