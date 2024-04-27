import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// Export indivdual functionalitly to be use in components
export const {login, logout} = authSlice.actions;

//Store ko awareness chahiye sare reducers k bare me
export default authSlice.reducer;