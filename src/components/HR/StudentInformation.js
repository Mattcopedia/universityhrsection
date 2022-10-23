
import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import StudentHeader from './StudentHeader';

 

const StudentInformation = () => {

    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>



     <StudentHeader />

        <div className='mx-auto my-5'>
        <EditProfileRoot>Enter Student Details</EditProfileRoot>
        </div>

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
                
                           
                <FlexColumn1>     

                         <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> University name</Text4>   

                   <div className="amendment  pr-12 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>Federal University of Technology Akure </option> 
                    <option>Federal University of Technology Akure </option>
                    <option>Federal University of Technology Akure </option>
                    <option>Federal University of Technology Akure </option>
             
                </select> 

                </div> 


                 </FlexColumn2>            

                <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                 

                       
                 <Text4 htmlFor="Enter Student Id"> Enter Student Name/ID</Text4>   
                 <div className='pr-10 md:pr-12 lg:pr-0'>     
                 <input  style={{height: "44px"}} ref={focusDiv} className='form' placeholder='Stat/11/2009'  type="text" id="StudentId"/>  
              </div>  

                 </FlexColumn2>  

                
                    <div className='newbtn mr-11 lg:mr-0 md:mr-0  '>
                    <button className='purplebtn' >Call Up Record</button> 
                    </div>
                </FlexColumn1>
              
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>

       <div> 
       
       </div>
        </> 
           
    )
 
}

const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  };
  export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };






const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

`;
const RootRoot = styled.div`


  min-width: 424px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  margin-bottom: 170px; 

  @media ${devices.mobileL} { 
    min-width: 100px; 
    margin: 0px;
    overflow: hidden; 
   }  

`;








const FlexColumn = styled.div`
  min-height: 5px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:30px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;

    padding-left:45px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
   
    
    padding-left:10px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
 padding-top: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;
  

  @media ${devices.mobileL} { 
    margin: 0px 0px 0px 0px;
    margin-right: 145px; 
 
  } 
`; 


const EditProfileRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  display:flex;
  justify-content: center; 
  margin-bottom: 10px;
  font-weight: bold; 
  margin-bottom:20px;
  margin-top: 50px;
  text-align: center;
`;









export default StudentInformation; 


