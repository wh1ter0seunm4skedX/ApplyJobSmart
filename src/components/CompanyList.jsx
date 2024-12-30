import React from 'react';
    import { mockCompanies, mockJobs } from '../mockData';
    
    function CompanyList() {
      const companiesWithRoleCount = mockCompanies.map(company => {
        const roleCount = mockJobs.filter(job => job.company === company.name).length;
        return { ...company, roleCount };
      });
    
      return (
        <div>
          <h1>Company List</h1>
          <ul>
            {companiesWithRoleCount.map(company => (
              <li key={company.id}>
                <strong>{company.name}</strong> - Location: {company.location} - Roles: {company.roleCount}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default CompanyList;
