import React from 'react';
import './App.css';

    import { ScheduleComponent, Day, Week, Month, Inject } from '@syncfusion/ej2-react-schedule';
    class App extends React.Component {
        render() {
         
            return <ScheduleComponent>
        <Inject services={[Day, Week, Month]}/>
    </ScheduleComponent>
    
        }
      }

export default App;
