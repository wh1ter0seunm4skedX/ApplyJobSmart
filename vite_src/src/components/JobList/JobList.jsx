import React, { useState } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { applyToJob } from '../../redux/slices/jobsSlice';
    
    function JobList() {
      const jobs = useSelector(state => state.jobs.jobs);
      const dispatch = useDispatch();
      const [filter, setFilter] = useState('all');
      const [sortBy, setSortBy] = useState('title');
    
      const handleApply = (job) => {
        dispatch(applyToJob(job));
      };
    
      const filteredJobs = jobs.filter(job => {
        if (filter === 'applied') return job.status === 'Applied';
        if (filter === 'unapplied') return job.status === 'Open';
        return true;
      });
    
      const sortedJobs = [...filteredJobs].sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    
      return (
        <div>
          <h1>Job List</h1>
          <div>
            <label>Filter: </label>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="applied">Applied</option>
              <option value="unapplied">Unapplied</option>
            </select>
            <label>Sort By: </label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="title">Title</option>
            </select>
          </div>
          <ul>
            {sortedJobs.map(job => (
              <li key={job.id}>
                <div>
                  <strong>{job.title}</strong> at {job.company} - Status: {job.status}
                </div>
                {job.status === 'Open' ? (
                  <button onClick={() => handleApply(job)}>Apply</button>
                ) : (
                  <button className="applied-button" disabled>Applied</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default JobList;
