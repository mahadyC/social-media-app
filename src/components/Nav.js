import React from 'react';
import { NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <div className="Nav">
             
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/" > <div className="icon"> <i  className="fas fa-home"></i> </div></NavLink> 
             
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/group" ><div className="icon"> <i  className="fas fa-users"></i> </div></NavLink> 
          
                <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/notification" > <div className="bell"><i  className="fas fa-bell"></i></div> </NavLink> 
           
        </div>
    );
};

export default Nav;