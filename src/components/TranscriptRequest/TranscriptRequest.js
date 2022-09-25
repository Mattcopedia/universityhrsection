import React from 'react'
import TranscriptrequestHeader from './TranscriptrequestHeader'
import styled from "styled-components";  
import Sidebar from 'components/Sidebar';
import { Link } from 'react-router-dom';



const TranscriptRequest = () => {
  return (

    <div>
        <Sidebar />
        <TranscriptrequestHeader />
             
            <div className="flex justify-evenly lg:flex-row md:flex-col flex-col items-center mx-4 bg-gray-100 my-3">
            <div className="  mb-4 ">
            <Text1>24/10/2021</Text1>
                </div>
            <div className="  mb-4 ">
            <Text1>Ayomide Akinyemi</Text1>
                </div>
            <div className="  mb-4 ">
            <Text1>STA/11/7009</Text1>
                </div>
            <div className="  mb-4 ">
            <Text1>ayomideakiny@gmail.com</Text1>
            </div>
            <div className="  mb-4 ">
            <Text2>Submitted</Text2>
                </div>
                <Link to="/transcript-payment">
            <div className="  mb-6 pt-2 ">
            <WhiteText>View details</WhiteText>
                </div> 
                </Link>
            </div>

            <div >
                <RectangleRootRoot>
                    <div className='bg-gray-100 px-11 py-11'>
                <NeonCarrotText>Start a new application</NeonCarrotText>
                      </div>
                </RectangleRootRoot>

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

const Text2 = styled.div`
  color: #eb5757;
  font-size: 14px;
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


const RectangleRootRoot = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 49px 0px;
//   background-color: #FAFAFA;
//   margin-left: 300px;
//   margin-right: 300px;
//   margin-bottom: 50px;
 
`;
const NeonCarrotText = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #df8909;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  white-space: nowrap;
  background-color: rgba(224, 137, 9, 0.1);
  border-radius: 6px;
  padding: 30px;
`;



export default TranscriptRequest