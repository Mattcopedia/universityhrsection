import React from 'react'
import styled from "styled-components";  
import Sidebar from 'components/Sidebar';
import { Link } from 'react-router-dom';
import HistoryHeader from '../History/HistoryHeader';



const HistoryHR = () => {
  return (

    <div>
        <Sidebar />
        <HistoryHeader />
       
        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg  my-6 ' style={{width:"100%"}} >    
   <tr style={{height:"40px"}}>
  
       <th style={{width:"20%"}}><Text5>Name</Text5></th>
       <th style={{width:"20%",paddingRight: "20px"}}><Text5>Department</Text5></th> 
       <th style={{width:"16.6%"}}><Text5>Student ID</Text5></th>
       <th style={{width:"16.6%"}}><Text5>Status</Text5></th>
       <th style={{width:"16.6%", paddingLeft: "40px"}}><Text5>Action</Text5></th>

   </tr>    

   <tr  style={{height:"70px", marginBottom: "20px", backgroundColor: "#e5e5e5"}}> 
     
       <td style={{paddingLeft: "10px"}}> <Text1>Ayomide Akinyemi</Text1></td>
       <td style={{paddingLeft: "10px"}}><Text1>Statistics </Text1></td>
       <td style={{paddingRight: "10px"}}><Text1>STA/11/7009</Text1></td>
       <td><Text1>Graduated</Text1></td>
       <td style={{paddingRight: "10px", paddingLeft: "5px"}}> <Link to="/"><WhiteText>View details</WhiteText></Link></td>
   
   </tr>
   <br/>
   <tr  style={{height:"70px", marginBottom: "20px", backgroundColor: "#e5e5e5"}}> 
     
     <td style={{paddingLeft: "10px"}}> <Text1>Ayomide Akinyemi</Text1></td>
     <td style={{paddingLeft: "10px"}}><Text1>Statistics </Text1></td>
     <td style={{paddingRight: "10px"}}><Text1>STA/11/7009</Text1></td>
     <td><Text1>Graduated</Text1></td>
     <td style={{paddingRight: "10px", paddingLeft: "5px"}}> <Link to="/"><WhiteText>View details</WhiteText></Link></td>
 
 </tr>

 <br/>


 <tr  style={{height:"70px", marginBottom: "20px", backgroundColor: "#e5e5e5"}}> 
     
     <td style={{paddingLeft: "10px"}}> <Text1>Ayomide Akinyemi</Text1></td>
     <td style={{paddingLeft: "10px"}}><Text1>Statistics </Text1></td>
     <td style={{paddingRight: "10px"}}><Text1>STA/11/7009</Text1></td>
     <td><Text1>Graduated</Text1></td>
     <td style={{paddingRight: "10px", paddingLeft: "5px"}}> <Link to="/"><WhiteText>View details</WhiteText></Link></td>
 
 </tr>

 <br/>

 <tr  style={{height:"70px", marginBottom: "20px", backgroundColor: "#e5e5e5"}}> 
     
     <td style={{paddingLeft: "10px"}}> <Text1>Ayomide Akinyemi</Text1></td>
     <td style={{paddingLeft: "10px"}}><Text1>Statistics </Text1></td>
     <td style={{paddingRight: "10px"}}><Text1>STA/11/7009</Text1></td>
     <td><Text1>Graduated</Text1></td>
     <td style={{paddingRight: "10px", paddingLeft: "5px"}}> <Link to="/"><WhiteText>View details</WhiteText></Link></td>
 
 </tr>

   

      </table>
    

</div>



    </div>
  )
}

const Text1 = styled.div`
  color: #505050;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  
`;

const Text5 = styled.div`
  color: #505050;
  font-size: 15px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap; 

`;

const WhiteText = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #219653;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #219653;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 11.5px 0px;
  padding-left: 20px;
  padding-right: 20px;
  border-width: 0.5px;
`;




export default HistoryHR