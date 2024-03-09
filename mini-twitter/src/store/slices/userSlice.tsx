import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sendLoginInfo: (state, action: PayloadAction<{ username: string }>) => {
      if (state.user === null) {
        state.user = { username: action.payload.username, id: 0 }; // id için varsayılan bir değer atayın
      } else {
        state.user = { ...state.user, username: action.payload.username };
      }
    },
  },
});

export const { sendLoginInfo } = userSlice.actions;
export default userSlice.reducer;
