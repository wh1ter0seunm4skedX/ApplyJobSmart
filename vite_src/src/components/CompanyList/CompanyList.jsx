import React from 'react';
    import { useSelector } from 'react-redux';
    import { Link } from 'react-router-dom';
    
    function CompanyList() {
      const companies = useSelector(state => state.companies.companies);
      const jobs = useSelector(state => state.jobs.jobs);
    
      const companiesWithRoleCount = companies.map(company => {
        const roleCount = jobs.filter(job => job.company === company.name).length;
        return { ...company, roleCount };
      });
    
      return (
        <div>
          <h1>Company List</h1>
          <ul>
            {companiesWithRoleCount.map(company => (
              <li key={company.id}>
                <Link to={`/company/${company.id}`}>
                  <strong>{company.name}</strong> - Location: {company.location} - Roles: {company.roleCount}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default CompanyList;
