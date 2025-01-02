import React, { useState } from 'react';
    import { mockJobs } from '../mockData';
    
    function JobList() {
      const [jobs, setJobs] = useState(mockJobs);
    
      const handleApply = (jobId) => {
        const updatedJobs = jobs.map(job => {
          if (job.id === jobId) {
            alert(`You applied for ${job.title}`);
            return { ...job, status: 'Applied' };
          }
          return job;
        });
        setJobs(updatedJobs);
      };
    
      return (
        <div>
          <h1>Job List</h1>
          <ul>
            {jobs.map(job => (
              <li key={job.id}>
                <div>
                  <strong>{job.title}</strong> at {job.company} - Status: {job.status}
                </div>
                <button onClick={() => handleApply(job.id)}>Apply</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default JobList;
