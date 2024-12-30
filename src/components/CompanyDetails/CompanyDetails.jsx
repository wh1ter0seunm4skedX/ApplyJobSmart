import React from 'react';
    import { useParams } from 'react-router-dom';
    import { useSelector } from 'react-redux';
    
    function CompanyDetails() {
      const { id } = useParams();
      const companies = useSelector(state => state.companies.companies);
      const jobs = useSelector(state => state.jobs.jobs);
    
      const company = companies.find(c => c.id === parseInt(id));
    
      if (!company) {
        return <div>Company not found</div>;
      }
    
      const companyJobs = jobs.filter(job => job.company === company.name);
    
      return (
        <div>
          <h1>{company.name}</h1>
          <p>Location: {company.location}</p>
          <h2>Roles at {company.name}</h2>
          <ul>
            {companyJobs.map(job => (
              <li key={job.id}>
                <strong>{job.title}</strong> - Status: {job.status}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default CompanyDetails;
