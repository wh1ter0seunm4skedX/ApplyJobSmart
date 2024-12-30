import { configureStore } from '@reduxjs/toolkit';
    import jobsReducer from './slices/jobsSlice';
    import companiesReducer from './slices/companiesSlice';
    import applicationsReducer from './slices/applicationsSlice';
    
    const store = configureStore({
      reducer: {
        jobs: jobsReducer,
        companies: companiesReducer,
        applications: applicationsReducer,
      },
    });
    
    export default store;
