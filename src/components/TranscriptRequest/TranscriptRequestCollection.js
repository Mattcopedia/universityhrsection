import Sidebar from 'components/Sidebar';
import React from 'react'

import { useRef} from 'react'
import styled from "styled-components";  

const TranscriptCollection = () => {
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
   return (
    <div>
        <Sidebar />
       <RootRootaw>
               <div className='md:ml-9'>
             <div className=' bg-gray-100 mb-11 pb-5 pl-5 lg:pl-0  mx-auto lg:mx-1 pt-8 lg:pt-4'>
             <FlexColumnaw>
                 
                            
                 <FlexColumn1aw>
                 
 
                 <form>           
                <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                <div className="flex-col my-3">
                 <Text4aw htmlFor="receive-email"> Full Name</Text4aw>
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="receivingemail"/>  
                  </div>       
                  </div> 

                  <div className="flex-col my-3">
                 <Text4aw htmlFor="receive-email">  Email</Text4aw>
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="receivingemail"/>  
                  </div>       
                  </div> 
                  </div>



                  <div className='flex lg:gap-10 flex-col md:flex-col lg:flex-row'>

                  <div className="flex-col my-3">
                 <Text4aw htmlFor="receive-email"> Student Id</Text4aw>
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="receivingemail"/>  
                  </div>       
                  </div> 

                  <div className="flex-col my-3">
                 <Text4aw htmlFor="receive-email"> Phone number</Text4aw>
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="receivingemail"/>  
                  </div>       
                  </div> 

                  </div>

                  <Text4aw >Format</Text4aw>
                          
                          <div className='flex flex-row gap-5'>
                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Soft Copy" name="Copy" /> <Text4aw >Soft Copy</Text4aw>
                        </div>

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Hard Copy" name="Copy" /> <Text4aw >Hard Copy</Text4aw>
                        </div>

                        <div className='flex flex-row lg:gap-4 md:gap-4 gap-2'>
                        <input type="radio" value="Both" name="Copy" /> <Text4aw >Both</Text4aw>
                        </div>        
                  </div>

                  <div className="flex-col my-3">
                 <Text4aw htmlFor="receive-email"> Receiving Email</Text4aw>
                  <div className='pr-14 md:pr-0 lg:pr-0'>      
                  <input ref={focusDiv} className='form'  type="text" id="receivingemail"/>  
                  </div>       
                  </div> 

                  <Text4aw> More Information</Text4aw>
          <div>  
            <Textarea ref={focusDiv}  rows="4"   id="message"/>  
            </div> 
                   
                
        
                <div class='flex justify-end gap-5 flex-col md:flex-row'> 
                <RectangleRootn>
                <p  className='text-black  px-auto text-center lg:pl-1 cursor-pointer'>Cancel</p>   
                </RectangleRootn>  

                 <RectangleRoot>
                <p  className='text-white  px-auto text-center lg:pl-1 cursor-pointer'>Next</p>   
                </RectangleRoot>  
                </div>
               
                 </form> 
                
                 </FlexColumn1aw> 
                 <div>
            
              </div>
             </FlexColumnaw>
 
             </div>  
             </div>
              
              
            </RootRootaw>  


    </div>
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
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

  const RectangleRootn = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 200px;
  height: 50px;
  background-color: #e8e8e8;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top:10px;
  

  @media ${devices.mobileL} { 
    width: 200px;
    height: 50px; 
   padding-right: 10px; 
   margin-left:10px; 
   padding-bottom: 2px;
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
  margin-top:10px;

  @media ${devices.mobileL} { 
    width: 200px;
    height: 50px; 
   padding-right: 10px; 
   margin-left:10px; 
   padding-bottom: 2px;
  } 
  
`;

const RootRootaw = styled.div`


  
  display: flex;
  flex-direction: column;
  margin-right:100px;


  @media ${devices.tablet} { 
    margin-top:5px;
    margin-right:2px; 
    margin-left:8px;
   }  

  @media ${devices.mobileL} { 
    margin-top:5px;
    margin:auto;
    overflow: hidden;
    margin-left:12px;
   }  

`;

const Text4aw = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;







const FlexColumnaw = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
 
  
  }    


  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-left:8px;  
   
  }  

`;
const FlexColumn1aw = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.tablet} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

  } 

  @media ${devices.mobileL} { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    

  } 
`; 


const Textarea = styled.textarea`
  border-style: solid;
  border-color: #b3b1b1;
  width: 780px;

  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;

  :focus {
    padding-left: 10px;
  } 
  @media ${devices.laptop} {
    width: 780px;
  }

    @media ${devices.tablet} {
      width: 370px;
    }

@media ${devices.mobileL} {
      width: 280px;
    }
`;





export default TranscriptCollection





