
       import React, {useRef,useEffect} from "react"; 
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
    
      import "../components/br.css"
import { Link } from "react-router-dom";

   

       

export default function Dashboard() {  
       
  const focusDiv = useRef();

  useEffect(() => {
if(focusDiv.current) focusDiv.current.focus();  
}, [focusDiv]);


    return (   
        <>
        <Sidebar />  

        <div className="bg-white py-5">  

        <div class="max-w-7xl ml-7 heropattern py-11 px-3 mr-7  grid grid-cols-12 ">
              <div class="col-span-12 mt-0.4   md:col-span-12 object-fill lg:col-span-6">

              {/* <img width={700} src={welcomeone} alt="welcome" /> */}
                
              <FlexColumn>
                <FlexRow>
                  <Text10></Text10>
                  <Text20></Text20>
                </FlexRow>
                <Text30>Welcome to <br className="responsivemodal"></br> Transcript request <br className="responsivemodal"></br> Portal</Text30>
              </FlexColumn>  


              </div>

              <div class="col-span-12 pb-0.5   md:col-span-12 object-fill lg:col-span-6 "> 
       

              <Paragraph>
            Develop a passion for learning. If you do, you will never cease to grow.
            – <Text40>Anthony J. D’Angelo</Text40>  
          </Paragraph>

              </div>
              </div>     
              </div>
            
              <div className="mx-7 my-4 ">
                   
                   <div className="container mx-auto mb-4 "> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <NeonCarrotFlexRow>
                    <FlexColumn1 width={`148px`}>
                        <Text1>Assigned Request</Text1>
                        <Text2>0</Text2>
                        </FlexColumn1>
                        <Image1 src={`https://file.rendit.io/n/9Vr3KV0eOirqoe47C5Ev.svg`} />
                    </NeonCarrotFlexRow>
                           
                           </div>
                            
                                    
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                              
                           <NeonCarrotFlexRow>
                    <FlexColumn1 width={`148px`}>
                        <Text1>Completed Request</Text1>
                        <Text2>0</Text2>
                        </FlexColumn1>
                        <Image1 src={`https://file.rendit.io/n/1cRNFELBdOw52PMM094O.svg`} />
                    </NeonCarrotFlexRow>

                         

                           </div>
          
                            
                       </div>
                         </div>
                         </div>  

                         <div >

                <RectangleRootRoot>
                  <Link to="/transcript-collection">
                    <div className='bg-gray-100 px-11 py-11'>
                <NeonCarrotText>Start a new application</NeonCarrotText>
                      </div>
                      </Link>
                </RectangleRootRoot>

            </div>


      
                  
        </>
    );
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





const FlexColumn = styled.div`
  align-self: stretch;
  width: 318px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  min-width: 318px;
  align-items: center;
`;
const Text10 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
`;
const Text20 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const Text30 = styled.div`
  mix-blend-mode: normal;
  font-size: 32px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #ffffff;

  @media ${devices.mobileL} { 
    margin-right: 100px; 
  } 
`;
const Paragraph = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  margin: 3px 0px 0px 0px;
  white-space: pre-wrap;
  
`;
const Text40 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #f2994a;
  display: contents;
`;




const FlexColumn1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13px;
  flex-grow: 1;
  align-items: center;
  width: ${(props) => props.width};
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #505050;
`;
const Text2 = styled.div`
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  color: #505050;
  align-self: flex-start;
`;

const NeonCarrotFlexRow = styled.div`
  width: 239px;
  background-color: rgba(242, 153, 74, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const Image1 = styled.img`
  width: 50px;
  height: 50px;
`;



const RectangleRootRoot = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 49px 0px;
 
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











































