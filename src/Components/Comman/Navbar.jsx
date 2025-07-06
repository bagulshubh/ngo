import React from 'react'
import logo from "../../assets/logo.jpg"
import NavTags from './NavTags'
import { FaHeart } from "react-icons/fa";
import "./Navbar.css"
import { useNavigate, useNavigation } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();


  return (
    <div className='navbar-container'>
        <img className="navbar-img" src={logo} onClick={() => {
            navigate("/")
        }}></img>
        <div className='navbar-divs'>
             <div className='navbar-top'>
                <div>Contact details</div>
            </div>
            <div className='navbar-down'>
                <div className='navbar-tags-con'>
                        <div onClick={ () => {
                            navigate("/")}
                        } className='home-navbar'>Home</div>
                        <NavTags header={"Who are we?"} tags = {["How sdfasdfsd", "What fasdfas", "Whenfasd fsadf"]}></NavTags>
                        <NavTags header={"What we do?"} tags = {["Shubham sdafasdf ", "Atharv asdfasdfad asd"]}></NavTags>
                        <NavTags header={"Get Involved"} tags = {["Bagul sda f", "Nigdikarasd fasd fas"]}></NavTags>
                        <NavTags header={"Resources"} tags = {["Nashik asd fasd f", "Punea asd fasdf"]}></NavTags>
                </div>
                <div className='navbar-donate btn-effect'>
                    <FaHeart></FaHeart>
                    <p>Donate Now</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Navbar
