import { Divider,Header } from "semantic-ui-react";
import weatherbitLogo from '../assets/weatherbitLogo.png';

function AppHeader(){

    return(
        <>
         <Header className="appHeader" textAlign="center"  as='h1'>
        </Header>
        <img alt="" src={weatherbitLogo}></img> 
        <Divider></Divider>
        </>
    
    )

}



export default AppHeader;