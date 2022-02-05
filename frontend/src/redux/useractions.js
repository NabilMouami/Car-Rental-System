import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userinformations: [],
    image: [],
  };


  const userSlice = createSlice({
    name: "userinfo",
    initialState,
    reducers: {
        createuser(state,action){
            let current = action.payload;
            state.userinformations = current;
        },
        createimg(state,action){
            let current = action.payload
            state.image = current;
        }
    }
});

export const { createuser,createimg } = userSlice.actions;

export default userSlice.reducer;