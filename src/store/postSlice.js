import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData : null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        createPost: (state, action) => {
            state.postData = action.payload.postData
        },
        deletePost: (state) => {
            state.postData = null
        }
    
    }
})


// Export indivdual functionalitly to be use in components
export const {createPost, deletePost} = postSlice.actions;

//Store ko awareness chahiye sare reducers k bare me
export default postSlice.reducer