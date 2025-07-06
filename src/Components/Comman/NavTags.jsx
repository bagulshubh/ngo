import {React, useState} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const NavTags = (props) => {

    const tags = props.tags;
    const header  = props.header;
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="navtags-con"  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className='navtags-header'>
          <div>{header}</div>
          <FaAngleDown className='orange'></FaAngleDown>
        </div>
        <div className={`sub-navtags-con ${isHovered ? 'show' : 'hide'}`}  onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} >
          {
            tags.map((tag) => {
                return <div className='navbar-subtag' onClick={() => {
                  navigate(`/${tag}`)
                }}>{tag}</div>
            })
          }
        </div>
    </div>
  )
}

export default NavTags
