import React, { useReducer } from 'react';
import reducer from 'reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm.jsx';
import Events from './Events.jsx';

const App = () => {
   const [state, dispatch] = useReducer(reducer, []);

   return (
      <div className="container-fluid">
         <EventForm state={ state } dispatch={ dispatch }/>
         <Events state={ state } dispatch={ dispatch }/>
      </div>
   );
}

export default App