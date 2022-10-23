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
                 
                   
             
             

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 92px 0px 0px`}  >
                      Dashboard</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>



                     <div className='focus:blue'>
                     <NavLink to="/history-hr" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/jIt7rpAWKWaTdUdfTpU5.svg`} />
                    <Text2  margin={`0px 94px 0px 0px`}  >
                      History</Text2> 
             
                  </FlexRow2> 
                  </NavLink>
                 
             
                     </div>

                     <div className='focus:blue'>
                     <NavLink to="/payment-details" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/fito0BWtBaTeiolKxOGR.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      Payment</Text2> 
             
                  </FlexRow2> 
                  </NavLink>
                 
             
                     </div>


                     <div className='focus:blue'>
                     <NavLink to="/student-information" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px -2px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/H5cBdyWtycaRxkh4P5g9.png`} />
                    <Text2  margin={`0px 69px 0px 0px`}  >
                      Student Info</Text2> 
             
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







