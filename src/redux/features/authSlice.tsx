import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface User_Type {
    user_id: number | null,
    name: string | null,
    image: string | null,
    email: string | null,
    password: string | null,
    role: string | null
}

const initial_Value: User_Type = {
    user_id: null,
    name: '',
    image: '',
    email: '',
    password: '',
    role: ''
}

const authSlice = createSlice({
    name: 'User',
    initialState: initial_Value,
    reducers: {
        setUser: (state, action: PayloadAction<User_Type>) => {
            const { user_id, name, image, email, password, role } = action.payload;
            state.user_id = user_id;
            state.name = name;
            state.image = image;
            state.password = password;
            state.role = role;
            state.email = email;
        },
        removeUser: (state) => {
            state.user_id = null;
            state.name = null;
            state.image = null;
            state.password = null;
            state.role = null;
            state.email = null;
        }
    }
})

export const { setUser, } = authSlice.actions;
export default authSlice.reducer;
