import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/topbar';
import SideBar from './components/sidebar';
import Studentprofile from './components/studentprofile';
import StudentInfo from './components/paymentModule/studentinfo';

import Payments from './components/paymentModule/payments';
import InfoComponented from './components/infoComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="main_body d-flex flex-row gap-3">
          <div className="aside">
            <SideBar />
          </div>
          <div className="main d-flex flex-column">
            <div className="main_top">
              <Studentprofile />
            </div>
            <div className="main_bottom d-flex flex-row">
              <div className="student_info">
                <Routes>
                  <Route path="/" element={<StudentInfo />}>
                    <Route path="payment" element={<Payments />} />
                    <Route path="cancellation" element={<div>Cancellation</div>} />
                    <Route path="concession" element={<div>Concession</div>} />
                    <Route path="pmissue" element={<div>PM Issue</div>} />
                    <Route path="feeinstallments" element={<div>Fee Installments</div>} />
                    <Route path="akashbooks" element={<div>Akash Books</div>} />
                    <Route path="uniform" element={<div>Uniform</div>} />
                    <Route path="transfers" element={<div>Transfers</div>} />
                  </Route>
                </Routes>
              </div>
              <div className="info_content">
                <InfoComponented />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
