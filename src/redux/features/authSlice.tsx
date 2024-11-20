import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface User_Type {
    user_id: number | null,
    name: string | null,
    image: string | null,
    email: string | null,
    password: string | null,
    role: string | null,
    address: string | null,
    contact_number: string | null
}

const initial_Value: User_Type = {
    user_id: null,
    name: '',
    image: '',
    email: '',
    password: '',
    role: '',
    address: '',
    contact_number: ''
}

const authSlice = createSlice({
    name: 'User',
    initialState: initial_Value,
    reducers: {
        setUser: (state, action: PayloadAction<User_Type>) => {
            const { user_id, name, image, email, password, role, address, contact_number } = action.payload;
            state.user_id = user_id;
            state.name = name;
            state.image = image;
            state.password = password;
            state.role = role;
            state.email = email;
            state.address = address;
            state.contact_number = contact_number;
        },
        removeUser: (state) => {
            state.user_id = null;
            state.name = null;
            state.image = null;
            state.password = null;
            state.role = null;
            state.email = null;
            state.address = null;
            state.contact_number = null
        }
    }
})

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
