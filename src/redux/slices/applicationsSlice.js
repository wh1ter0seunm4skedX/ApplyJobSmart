import { createSlice } from '@reduxjs/toolkit';
    import { mockApplications } from '../../data/mockData';
    
    const initialState = {
      applications: mockApplications,
    };
    
    const applicationsSlice = createSlice({
      name: 'applications',
      initialState,
      reducers: {
        addApplication: (state, action) => {
          const newApplication = {
            id: state.applications.length + 1,
            ...action.payload,
          };
          state.applications.push(newApplication);
        },
        removeApplication: (state, action) => {
          const applicationId = action.payload;
          state.applications = state.applications.filter(app => app.id !== applicationId);
        },
      },
    });
    
    export const { addApplication, removeApplication } = applicationsSlice.actions;
    export default applicationsSlice.reducer;
