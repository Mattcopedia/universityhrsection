import { useState } from 'react';
import styled from "styled-components";  
import AdminNavbar from './AdminNavbar';
import { NavLink, Link} from "react-router-dom";  
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';  
import "./br.css"
import unigig from "../assets/img/unigig.jpg"

 
 
export default function Sidebar() {

    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}  
            />
            <div
                className={` fixed   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden  transition-all duration-300 bg-white`} >  

                         


                <Element7>
                

                <Line src={`https://file.rendit.io/n/HyUCUJJkXhfGGVECnrB6.svg`} />
                <PlumFlexColumn>

                  <div className='md:hidden ml-20 pl-20'>
                       <Button
                           
                            buttonType="link" 
                            size="lg"
                            iconOnly  
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                  </div>
                
                  <Link to="/">
                  <ImageRoot src={unigig}  />
                  </Link> 
                 
                   
                 <Link to="/transcript-collection">
                    <WhiteFlexRow>
                <Image1a src={`https://file.rendit.io/n/7OUSS3WQDM8590MQKxa2.svg`} />
                <Text2a>New application</Text2a> 
              </WhiteFlexRow>
              </Link>
             

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Dashboard</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>



                     <div className='focus:blue'>
                     <NavLink to="/active-application" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1  src={`https://file.rendit.io/n/MTx8bc0fuyXVxVtAdUtf.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Active</Text2> 
             
                  </FlexRow2> 
                  </NavLink>
                 
             
                     </div>

                     {/* <div className='focus:blue'>
                     <NavLink to="/transcript-payment" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/fito0BWtBaTeiolKxOGR.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Payment</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div> */}


                     <div className='focus:blue'>
                     <NavLink to="/history" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/jIt7rpAWKWaTdUdfTpU5.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      History</Text2> 
             
                  </FlexRow2> 
                  </NavLink>
                 
             
                     </div>

                  
                </PlumFlexColumn> 
                
              </Element7>
        


            </div>
        </>
    );
}


const ImageRoot = styled.img`
width: 120px;
height: px50;
padding-bottom:10px;
`;

const NeonCarrotRectangle = styled.div`
  width: 2px;
  height: 22px;
  background-color: #df8909;
  opacity: 0;
  margin: ${(props) => props.margin};
`;
const Text2 = styled.a`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #ffffff;
  margin: ${(props) => props.margin};
  
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;

const FlexRow2 = styled.div`
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }


`;




const Element7 = styled.div`
  width: 237px;
  height: 900px;
  position: relative;
  flex-grow: 1; 
`;
const Line = styled.img`
  width: 38px;
  height: 4px;
  position: absolute;
  top: 699px;
  left: 106px;
`;
const PlumFlexColumn = styled.div`
  height: 818px;
  background-color: #250444;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 41px 23px 41px 0px;
`;

const Image1 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 18px 0px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;

const WhiteFlexRow = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 11px 16px 11px 11px;
  margin: 0px 0px 37px 0px;
  margin-right:15px;
`;
const Image1a = styled.img`
  width: 24px;
  height: 24px;
`;
const Text2a = styled.div`
  align-self: flex-end;
  color: #2d0353;
  font-size: 14px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  white-space: nowrap;
`;





