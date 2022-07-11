import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Tab1 from './Components/Animations/Tab1';
import Tab2 from './Components/Animations/Tab2';
import { YesNoWidget } from './Components/Animations/YesNoWidget';
import Lotties from './Components/Animations/Lotties';
import './App.css';
import { DashboardContent } from './Components/Onboarding/Dashboard';
import { Integrations } from './Components/Integrations';
import { Landing } from './Components/Landing';



export default function App() {
  const chmln = require('@chamaeleonidae/chmln');

  const [currentPageTitle, setCurrentPageTitle]= React.useState(null)
  chmln.init(
    'SsRnRdXwQeUPRY3RyC6Qtci7iY4iAj0Zu7wTMAPERlp6id-1GhC61-AY24pGp7KiNOkggx'
  );

  /* Chameleon event tracking. See trychameleon.com */

  // Example user events: to use these replace the placeholders (e.g. PLAN_CHANGED) with the actual event names you wish to use.

  chmln.identify(Math.floor(Math.random() * 100), {
    // REQUIRED, replace with a unique ID of each user in your database (e.g. 23443 or "590b80e5f433ea81b96c9bf6")

    created: new Date(), // RECOMMENDED, must be ISO8601 or unix timestamp format (e.g. "2017-07-01T03:21:10Z" or 1431432000).
    name: 'USER.NAME', // OPTIONAL, name will be parsed to first and surnames (e.g. "James Doe").
  });

  console.log(chmln);
  return (
    <Router basename='/sandbox'>
      {/* <ul style={{display:'flex', margin:'auto', width:'90%'}}>
          `
          <li>
            <Link to="/lotties">Lotties</Link>
          </li>
          <li>
            <Link to="/tab1">Tab 1</Link>
          </li>
          <li>
            <Link to="/tab2">Tab 2</Link>
          </li>
          <li>
            <Link to="/yesno">YesNo</Link>
          </li>
          <li>
            <Link to="/chameleon">Chameleon</Link>
          </li>
        </ul> */}

        <Routes>
          {/* <Route exact path="/animationsLib/lotties" element={<Lotties/>}/>
          <Route exact path="/animationsLib/tab1" element={<Tab1/>}/>
          <Route exact path="animationsLib/tab2" element={<Tab2/>}/> */}
          <Route exact path='/' element={<Landing />} />
          <Route exact path="/yesno" element={<YesNoWidget/>}/>
          <Route exact path='/integrations'  element={<Integrations />} />


        </Routes>

    </Router>
  );
}
