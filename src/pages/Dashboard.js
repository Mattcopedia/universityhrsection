
       import React, {useRef,useEffect} from "react"; 
       import styled from "styled-components";
       import Sidebar from "components/Sidebar";
    
      import "../components/br.css"

   

       

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
                  <Text10>Welcome Back</Text10>
                  <Text20>🚀</Text20>
                </FlexRow>
                <Text30>Mrs.Ayomide <br className="responsivemodal"></br> Akinyemi</Text30>
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

              <EditProfileRoot>Enter Student Details to View Result</EditProfileRoot>
         

        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex mx-auto items-center flex-wrap w-full ">
              <RootRoot>
             
            <div>
             
            <FlexColumna>                       
                <FlexColumn1>

                <FlexColumn2>  
                 <Text4 htmlFor="address"> Student Id</Text4>        
                  <input ref={focusDiv} className='form' placeholder='STA/11/7009' type="text" id="address" required/>  
                  </FlexColumn2> 
             
                 <FlexColumn2 margin={`10px 0px 10px 0px`}> 
                 

                 <Text4 htmlFor="Semeter/Year"> Semester/year</Text4>        
                 <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>1st semester for 2020-2021 </option> 
                    <option>1st semester for 2020-2021 </option>
                    <option>1st semester for 2020-2021 </option>
                    <option>1st semester for 2020-2021 </option>
                    <option>1st semester for 2020-2021 </option> 
                </select> 

                </div> 

                 </FlexColumn2>  
   

                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button className='purplebtn' >Call Up Record</button> 
                    </div>
              
                 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumna>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>
                  
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



const RootRoot = styled.div`


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



const FlexColumna = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;

    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 20px;
    
    padding-left:0px;  
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



const EditProfileRoot = styled.div`
  color: #2d0353;
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  display:flex;
  justify-content: center; 
  margin-bottom: 10px;
  font-weight: bold;
`;











































