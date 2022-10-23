import Sidebar from 'components/Sidebar';
import React from 'react'
import styled from "styled-components";  
import "../br.css" 


const PaymentDetails = () => {
  return (
    <>
    <Sidebar />
    <div>
            <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph> Payment <br className="responsivemodal"></br> </Paragraph> 
     </FlexColumnRoot>
        
       </div>
       <div className="">   
       <ImageRoot src={`https://file.rendit.io/n/OPOUlsP6EdDcW3xpKSzc.png`} /> 
       </div>   
     
    </div>
        
        <div className="flex flex-col justify-center">

    <PreviewRootRoot>Payment</PreviewRootRoot>
         
              <Text2zw >
                    To access student information, you are required to pay ₦5,000 for subscription
                     <br /> Payment can be made online with your Bank card.
                        </Text2zw>
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

const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 89px;
height: 89px;
`;



const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  text-align:center;
`;



const PreviewRootRoot = styled.div`
 
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  font-weight:bold;
  text-align:center;
  display: flex;
  justify-content:center;
  margin-bottom:10px;
  
`;
export default PaymentDetails; 