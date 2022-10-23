
import React, { useRef, useState} from 'react'
import styled from "styled-components";  
import "../br.css" 
import StudentHeader from './StudentHeader';

 

const StudentDetailsProfile = () => {
  const [shouldshow, setShouldshow] = useState(false);
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>

{ shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumnw>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraphw>
        Student Information<br className="responsivemodal"></br> has been saved successfully <br className="responsivemodal"></br>to your history{" "}

        </Paragraphw>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
      </FlexColumnw>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}


     <StudentHeader />

        <div className='mx-auto my-5'>
        <EditProfileRoot> Student Details</EditProfileRoot>
        </div>

        <div class=" mx-auto ">
                            <WhiteFlexRowRootzw>
                            <div className="pb-7">
              <PreviewRootRoot>Ayomide Akinyemi</PreviewRootRoot>
              </div>
                    <FlexColumnzw>
                        
                        <div className="flex flex-col lg:flex-row gap-20">
                        <FlexColumn1zw>
                        <Text1zw >Student ID</Text1zw>
                        <Text2zw alignSelf={`flex-start`}>STA/11/7009</Text2zw>
                        </FlexColumn1zw>
                        
                        <FlexColumn1zw >
                        <Text1zw >Department</Text1zw>
                        <Text2zw alignSelf={`flex-start`}>Statistics</Text2zw>
                        </FlexColumn1zw>

                       
                        
                        </div>

                        <br />
                        
                        <div className="flex flex-col lg:flex-row gap-12 ">
                            <div className=''>
                        <FlexColumn1zw >
                        <Text1zw >Number of Semester</Text1zw>
                        <Text2zw   alignSelf={`flex-start`}>10</Text2zw>
                        </FlexColumn1zw>
                        </div> 
                          
                          <div className=''>
                        <FlexColumn1zw >
                        <Text1zw>CGPA </Text1zw>
                        <Text2zw  alignSelf={`flex-start`} >4.5</Text2zw>
                        </FlexColumn1zw>
                        </div>
                            
                          

                        </div>

                        <br />

                        <div className=''>
                        <FlexColumn1zw >
                        <Text1zw>Status</Text1zw>
                        <Text2zw  alignSelf={`flex-start`} >Graduated</Text2zw>
                        </FlexColumn1zw>
                        </div>
                            
                     <div className='flex flex-col lg:flex-row gap-3'>
                        <RectangleRootX>
                <p  className='text-black  px-auto text-center lg:pl-1 cursor-pointer'>Save Profile</p>   
                </RectangleRootX> 

                <RectangleRoot>
                <p  className='text-white  px-auto text-center lg:pl-1 cursor-pointer'>Download Transcript</p>   
                </RectangleRoot> 

                </div> 




                    </FlexColumnzw>
                    </WhiteFlexRowRootzw> 

               

              </div>

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


const ModalBackground = styled.div`
     position:fixed;
     z-index: 1;
     left: 0;
     top: 0;
     width: 100%;
     height: 100%;
     overflow: auto;
     background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
     background-color: white;
     margin: 10% auto;
     padding: 20px; 
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 

      @media ${devices.mobileL} { 
        width: 100%;
      } 

`


const WhiteFlexColumnRoot = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumnw = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2 = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
`;
const Paragraphw = styled.div`
  text-align: center;
  width: 313px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  margin: 0px 0px 32px 0px;
  white-space: pre-wrap;

  @media ${devices.mobileL} { 
    margin-left:10px; 
    margin-right:10px;
  } 

`;
const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 170px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;





const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;




const Text1zw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;






const WhiteFlexRowRootzw = styled.div`
  max-width: 650px;
  background-color: #fafafa;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 45px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 
  margin: auto;
  margin-bottom: 20px;
`;



const FlexColumnzw = styled.div`
 
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
`;



const PreviewRootRoot = styled.div`
  width: 387px;
  color: #2d0353;
  font-size: 30px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;
  margin: auto;
  @media ${devices.mobileL} { 
    margin-left: 100px;  
  }  
`;




const RectangleRoot = styled.div`
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
width: 200px;
height: 50px;
background-color: #2d0353;
padding-top: 12px;
padding-bottom: 12px;
margin-top:30px;
margin:auto;

@media ${devices.mobileL} { 
  width: 200px;
  height: 50px; 
 padding-right: 10px; 
  margin:auto;
 padding-bottom: 2px;
} 

`;



const RectangleRootX = styled.div`
border-top-left-radius: 6px;
border-top-right-radius: 6px;
border-bottom-left-radius: 6px;
border-bottom-right-radius: 6px;
width: 200px;
height: 50px;
background-color: white;
padding-top: 12px;
padding-bottom: 12px;
margin-top:30px;
margin:auto;

@media ${devices.mobileL} { 
  width: 200px;
  height: 50px; 
 padding-right: 10px; 
  margin:auto;
 padding-bottom: 2px;
} 

`;




export default StudentDetailsProfile; 


