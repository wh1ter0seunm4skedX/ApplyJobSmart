import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { removeApplication } from '../../redux/slices/applicationsSlice';
    import { updateJobStatus } from '../../redux/slices/jobsSlice';
    
    function ApplicationHistory() {
      const applications = useSelector(state => state.applications.applications);
      const dispatch = useDispatch();
    
      const handleRemove = (application) => {
        dispatch(removeApplication(application.id));
        dispatch(updateJobStatus({ jobId: application.jobId, status: 'Open' }));
      };
    
      return (
        <div>
          <h1>Application History</h1>
          <ul>
            {applications.map(app => (
              <li key={app.id}>
                <div>
                  <strong>{app.jobTitle}</strong> at {app.companyName} - Applied on: {app.applicationDate}
                </div>
                <button onClick={() => handleRemove(app)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default ApplicationHistory;
