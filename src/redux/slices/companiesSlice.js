import { createSlice } from '@reduxjs/toolkit';
    import { mockCompanies } from '../../data/mockData';
    
    const initialState = {
      companies: mockCompanies,
    };
    
    const companiesSlice = createSlice({
      name: 'companies',
      initialState,
      reducers: {},
    });
    
    export default companiesSlice.reducer;
