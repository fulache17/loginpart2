import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaSmileBeam,
    FaSignOutAlt
}from "react-icons/fa";
import { TbCameraSelfie } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa6";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[

        {
            path:"/selfiein",
            name:"SelfieIn",
            icon:<TbCameraSelfie />

        },
        {
            path:"/selfieout",
            name:"SelfieOut",
            icon:<FaSmileBeam />
        },
        {
            path:"/overtime",
            name:"Overtime",
            icon:<FaBusinessTime />
        },
        {
            path:"/history",
            name:"History",
            icon:<MdOutlineHistoryEdu />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <FaSignOutAlt />
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "150px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <p style={{display: isOpen ? "block" : "none"}} className="logo">Inzpect</p>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        
    );
};

export default Sidebar;