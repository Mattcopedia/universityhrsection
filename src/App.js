import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';


import Login from 'components/Login'; 


 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
 

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateResetPassword'; 


import CreateNewLoginPassword from 'components/CreateNewLoginPassword';

import StudentDetails from 'components/HR/StudentDetails';
import StudentDetailsProfile from 'components/HR/StudentDetailsProfile';
import StudentInformation from 'components/HR/StudentInformation';
import PaymentDetails from 'components/HR/PaymentDetails';
import HistoryHR from 'components/HR/HistoryHR';
import StudentInfoHistory from 'components/HR/StudentInfoHistory';
import ResetPassword from 'components/ResetPassword';


// import { PrivateRoute } from './auth/PrivateRoute';


WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 

   

    return ( 
        <>     

    
          
         <Route exact path="/login" component={Login} /> 
      
         <Route exact path="/signup" component={SignupNow} />  
    
        

          <Route exact path="/createpassword" component={CreateLoginPassword} />  
          <Route exact path="/reset-password" component={ResetPassword} />   
         
          <Route exact path="/create-new-loginpassword" component={CreateNewLoginPassword} /> 
         
        <div className="md:ml-64 white "> 
        
        <Switch>
    
         <Route exact path="/" component={Dashboard} /> 
     
            <Route exact path="/student-details" component={StudentDetails} />
            <Route exact path="/student-details-profile" component={StudentDetailsProfile} />
            <Route exact path="/student-information" component={StudentInformation} />
            <Route exact path="/payment-details" component={PaymentDetails} />
            <Route exact path="/history-hr" component={HistoryHR} />
            <Route exact path="/studentinfo-hr" component={StudentInfoHistory} />
  
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

