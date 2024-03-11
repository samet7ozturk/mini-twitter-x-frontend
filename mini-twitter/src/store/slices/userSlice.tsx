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

function saveToLocalStorage(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    sendLoginInfo: (state, action: PayloadAction<{ username: string }>) => {
      if (state.user === null) {
        state.user = { username: action.payload.username, id: 0 };
      } else {
        state.user = { ...state.user, username: action.payload.username };
      }
      saveToLocalStorage(state.user);
    },
  },
});

export const { sendLoginInfo } = userSlice.actions;
export default userSlice.reducer;
