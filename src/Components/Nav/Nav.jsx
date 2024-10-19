import React from "react";
import "./Nav.css";

//import Router link
import { Link, NavLink } from "react-router-dom";

//import logo
import logo from "../../assets/logo.png";



// import menu icons
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

// usestate
import { useState } from "react";

  // React Icons For Nav And React.......................
  import { FiUser } from 'react-icons/fi';
  import { VscSearch } from 'react-icons/vsc';
  import { BsBag } from 'react-icons/bs';




const Nav = () => {

    const [isNavLinkShowing, setIsNavLinkShowing] = useState(false);

    if( window.innerWidth < 1024) {
        window.addEventListener('scroll',()=>{
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false)
        })
    };

    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
       
    })

    const navRight = {
        managements: [
          {
              id: 1,
              icon: FiUser,  
              link: '*'
          },
          {
              id: 2,
              icon: BsBag,      
              link: '*'
          },
          {
              id: 3,
              icon: VscSearch,      
              link: '*'
          },
        ]
          
      };

       const navLinks =[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'About',
            path:'/about'
        },
        // {
        //     name:'Pages',
        //     path:'/pages'
        // },
        {
            name:'Shop',
            path: '/Bookstore'
        },
        {
            name:'Articles',
            path:'/articles'
        },
        {
            name:'Contact',
            path:'/contact'
        },
      ];

  return <nav>
    <div className="container nav-container">
        {/* logo */}
        <Link to={'/'} className="logo">
        <img src={logo} alt="logo"/>
        </Link>

        {/* nav-links */}
        <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
            {navLinks.map(({name, path}, index) =>{
                return(
                    <li key={index}>
                        <NavLink to={path} className={({isActive}) => isActive ? 'active' : ''}>{name}</NavLink>
                    </li>
                )
            })}
        </ul>

        {/* nav right */}
        <div className="nav-right">
             {navRight.managements.map((item,index)=>{
                return(
                    <Link key={index} /* target="_blank" */  className="management-icons" to={item.link}>
                        <item.icon />
                    </Link>
                )
             })}

             <button className="menu-button " onClick={() =>setIsNavLinkShowing(!isNavLinkShowing)}>
               { !isNavLinkShowing ? <VscMenu /> : <GrClose/>}
             </button>
        </div>
    </div>



  </nav>;
};

export default Nav;
