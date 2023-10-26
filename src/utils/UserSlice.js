import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({

    name: 'user',
    initialState: null,
    reducers: {

        addUser: (state, action) =>{   // Reducers take 2 inputs- current state and the action

            return action.payload  // when we do return action.payload, the state in (bracket)
                                   // becomes action.payload

        },

        removeUser: (state, action)=>{
            return null;

        }
    }
})

export const{addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;