import { createSlice } from "@reduxjs/toolkit";

const changeName = (v) => {
  return v.charAt(0).toUpperCase() + v.slice(1);
};

const initialState = {
  user: {
    name: "",
    age: "",
    children: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeInput(state, action) {
      const modifiedName = changeName(action.payload.value);
      if(action.payload.id === undefined) {
        state.user = { ...state.user, [action.payload.name]: modifiedName };
      } else {
        state.user.children = state.user.children.map((child) => {
          if (child.id !== action.payload.id) return child;
          return {
            ...child,
            [action.payload.name]: modifiedName,
          };
        });
      }
    },
    addChild(state, action) {
      state.user.children.push(action.payload);
    },
    removeChild(state, action) {
      state.user.children = state.user.children.filter(
        (child) => child.id !== action.payload
      );
    },
    resetUser() {
      return initialState;
    },
  },
});

export const { changeInput, addChild, removeChild, resetUser } =
  userSlice.actions;

export default userSlice.reducer;
