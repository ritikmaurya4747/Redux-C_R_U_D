import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action Creators
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6713558d6c5f5ced6626146a.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Read Action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://6713558d6c5f5ced6626146a.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete Action 
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6713558d6c5f5ced6626146a.mockapi.io/crud/${id}`,{method:"DELETE"}
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    // Create  user
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Show user
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Delete user
    [deleteUser.pending]: (state) => {
        state.loading = true;
      },
      [deleteUser.fulfilled]: (state, action) => {
        state.loading = false;
        const {id} = action.payload;
        if(id){
            state.users = state.users.filter((ele) => ele.id !== id)
        }
      },
      [deleteUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export default userDetail.reducer;
