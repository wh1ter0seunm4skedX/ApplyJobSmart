import { createSlice } from '@reduxjs/toolkit';
    import { mockJobs } from '../../data/mockData';
    import { addApplication } from './applicationsSlice';
    
    const initialState = {
      jobs: mockJobs,
    };
    
    const jobsSlice = createSlice({
      name: 'jobs',
      initialState,
      reducers: {
        updateJobStatus: (state, action) => {
          const { jobId, status } = action.payload;
          const jobIndex = state.jobs.findIndex(job => job.id === jobId);
          if (jobIndex !== -1) {
            state.jobs[jobIndex].status = status;
          }
        },
      },
    });
    
    export const { updateJobStatus } = jobsSlice.actions;
    
    export const applyToJob = (job) => (dispatch) => {
      dispatch(updateJobStatus({ jobId: job.id, status: 'Applied' }));
      dispatch(addApplication({
        jobTitle: job.title,
        companyName: job.company,
        applicationDate: new Date().toLocaleDateString(),
        jobId: job.id,
      }));
    };
    
    export default jobsSlice.reducer;
