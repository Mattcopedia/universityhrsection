import Sidebar from 'components/Sidebar';
import React from 'react'
import styled from "styled-components"; 
import TranscriptApplicationHeader from './TranscriptApplicationHeader';


const TranscriptApplication = () => {
    

  return (
    <>


    <Sidebar />
    <TranscriptApplicationHeader />
    <div>
        
        <div class="max-w-7xl gap-5 grid grid-cols-12 ml-2 mb-3 md:ml-7 ">
        <div class="col-span-12 md:col-span-12 lg:col-span-4 mt-5 md:mt-0 "> 
              <div className='resultcolor py-5 px-9'>
              <PreviewRootRoot>Application Progress</PreviewRootRoot>
              </div>
              <div className='flex flex-col py-5'>
                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Submitted" name="Status" /> <Text4aw >Submitted</Text4aw>
                        </div>

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Received" name="Status" /> <Text4aw >Received</Text4aw>
                        </div>

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Processing" name="Status" /> <Text4aw >Processing</Text4aw>
                        </div> 

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Ready" name="Status" /> <Text4aw >Ready for Collection/sent</Text4aw>
                        </div>    

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Collected" name="Status" /> <Text4aw >Collected</Text4aw>
                        </div>     
                  </div>
             
                </div>


              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-8">
                            <WhiteFlexRowRootzw>
                            <div className="pb-3">
              <PreviewRootRoot>Ayomide Akinyemi</PreviewRootRoot>
              </div>
                    <FlexColumnzw>
                        
                        <div className="flex flex-row">
                        <FlexColumn1zw >
                        <Text1zw >Student ID</Text1zw>
                        <Text2zw alignSelf={`inherit`}>STA/11/7009</Text2zw>
                        </FlexColumn1zw>
                        
                        <FlexColumn1zw >
                        <Text1zw >Email</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Ayomide@rakoni.com</Text2zw>
                        </FlexColumn1zw>

                        <FlexColumn1zw >
                        <Text1zw >Status</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Graduated</Text2zw>
                        </FlexColumn1zw>
                        
                        </div>

                        <br />
                        
                        <div className="flex flex-row ">
                            <div className=''>
                        <FlexColumn1zw >
                        <Text1zw >Format</Text1zw>
                        <Text2zw >Soft Copy</Text2zw>
                        </FlexColumn1zw>
                        </div> 
                          
                          <div className=''>
                        <FlexColumn1zw >
                        <Text1zw>Receiving University Email</Text1zw>
                        <Text2zw >Ayomide@rakoni.com</Text2zw>
                        </FlexColumn1zw>
                        </div>
                            
                            <div className=''>
                        <FlexColumn1zw >
                        <Text1zw>Transaction</Text1zw>
                        <Text3zw >Paid</Text3zw>
                        </FlexColumn1zw> 
                        </div>

                        </div>

                        <br />

                        <FlexColumn6zw>
                        <Text1zw margin={`0`}>More Information</Text1zw>
                        <Text2zw alignSelf={`inherit`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. gnissim
                        euismod convallis proin et. Nisi, arcu Lorem ipsum dolor sit amet, consectetur adipiscing elit. gnissimeuismod convallis proin et. Nisi, arcu{" "}
                        </Text2zw>
                        </FlexColumn6zw>

                    </FlexColumnzw>
                    </WhiteFlexRowRootzw> 

               

              </div>


              
              
            </div>


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
const Text3zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  margin-right:80px;

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
`;



const FlexColumnzw = styled.div`
 
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
`;

const FlexColumn6zw = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreviewRootRoot = styled.div`
  width: 387px;
  color: #2d0353;
  font-size: 30px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;

`;

const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;





export default TranscriptApplication