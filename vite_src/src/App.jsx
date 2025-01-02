import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
    import JobList from './components/JobList/JobList';
    import CompanyList from './components/CompanyList/CompanyList';
    import ApplicationHistory from './components/ApplicationHistory/ApplicationHistory';
    import CompanyDetails from './components/CompanyDetails/CompanyDetails';
    
    function App() {
      return (
        <Router>
          <nav>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/applications">Applications</Link>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/jobs" element={<JobList />} />
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/applications" element={<ApplicationHistory />} />
              <Route path="/company/:id" element={<CompanyDetails />} />
            </Routes>
          </div>
        </Router>
      );
    }
    
    export default App;
