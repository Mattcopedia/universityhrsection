import Sidebar from 'components/Sidebar';
import React, {useState} from 'react'
import styled from "styled-components"; 
import TranscriptrequestHeader from './TranscriptrequestHeader';

const TranscriptPayment = () => {
    const [shouldshow, setShouldshow] = useState(false);

  return (
    <>

{ shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraph>
          Transcript Payment<br className="responsivemodal"></br> has been made successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}
    <Sidebar />
    <TranscriptrequestHeader />
    <div>
        
        <div class="max-w-7xl  grid grid-cols-12 ml-2 mb-3 md:ml-7 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">
                        <div className='pl-1'>
              <PreviewRootRoot>Preview</PreviewRootRoot>
              </div>

                            <WhiteFlexRowRootzw>
                    <FlexColumnzw>
                        
                        <div className="flex flex-row">
                        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
                        <Text1zw margin={`0`}>First name</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Ayomide Joy</Text2zw>
                        </FlexColumn1zw>
                        
                        <FlexColumn1zw margin={`0`}>
                        <Text1zw margin={`0px 0px 0px 1px`}>Last name</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Akinyemi</Text2zw>
                        </FlexColumn1zw>
                        
                        </div>
                        
                            
                        <div className="flex flex-row">
                        <FlexColumn1zw margin={`0px 40px 0px 1px`}>
                        <Text1zw margin={`0`}>Student No</Text1zw>
                        <Text2zw alignSelf={`inherit`}>STA/11/7009</Text2zw>
                        </FlexColumn1zw>
                        
                        <FlexColumn1zw margin={`0`}>
                        <Text1zw margin={`0px 0px 0px 1px`}>Email</Text1zw>
                        <Text2zw alignSelf={`inherit`}>Parent@rakoni.parent.com</Text2zw>
                        </FlexColumn1zw>
                        
                        </div> 

                        <div className="flex flex-row">
                        <FlexColumn1zw margin={`0px 20px 0px 1px`}>
                        <Text1zw margin={`0`}>Phone number</Text1zw>
                        <Text2zw alignSelf={`inherit`}>+234804345353</Text2zw>
                        </FlexColumn1zw>
                        
                        <FlexColumn2zw margin={`0px 0px 0px 1px`}>
                        <Text1zw margin={`0`}>Format</Text1zw>
                        <Text2zw > Soft Copy </Text2zw>
                        </FlexColumn2zw> 
                       
                        
                        </div>


                        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
                        <Text1zw margin={`0`}>Receiving University Emails</Text1zw>
                        <Text2zw alignSelf={`inherit`}> Parent@rakoniparent.com</Text2zw>
                        </FlexColumn1zw> 

                        <FlexColumn6zw>
                        <Text1zw margin={`0`}>Description</Text1zw>
                        <Text2zw alignSelf={`inherit`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. gnissim
                        euismod convallis proin et. Nisi, arcu Lorem ipsum dolor sit amet, consectetur adipiscing elit. gnissimeuismod convallis proin et. Nisi, arcu{" "}
                        </Text2zw>
                        </FlexColumn6zw>

                    </FlexColumnzw>
                    </WhiteFlexRowRootzw> 

               

              </div>


              <div class="col-span-12 md:col-span-12 lg:col-span-6 mt-5 md:mt-0 "> 
              <PreviewRootRoot>Payment</PreviewRootRoot>
              <div className='my-5'> 
              <Text2zw >
                    For your transcript request, you are required to pay ₦5,000 for this
                    transaction, payment can be made online with your Bank card.
                        </Text2zw>
                        </div>

              
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

const FlexColumn2zw = styled.div`
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
  color: #df8909;
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
  max-width: 480px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 45px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 

  @media ${devices.mobileL} { 
    margin-left: 0px;
    padding: 45px 8px;

    } 
`;



const FlexColumnzw = styled.div`
  width: 348px;
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
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;

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
const FlexColumn = styled.div`
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
const Paragraph = styled.div`
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



export default TranscriptPayment