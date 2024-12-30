import React from 'react';
    import { mockApplications } from '../mockData';
    
    function ApplicationHistory() {
      return (
        <div>
          <h1>Application History</h1>
          <ul>
            {mockApplications.map(app => (
              <li key={app.id}>
                <strong>{app.jobTitle}</strong> at {app.companyName} - Applied on: {app.applicationDate}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default ApplicationHistory;
