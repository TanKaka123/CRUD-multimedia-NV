import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";


const ContactAdmin = () => {
    return (
        <div class="container" style={{marginBottom:"100px"}}>
            <div class='row justify-content-center' style={{marginTop:"70px"}}>
                <div class="col-10" style={{textAlign:"center", display:'flex', flexDirection:"column", gap:"10px"}}>  
                    <img src={require('../assets/image/contact.png')} style={{maxWidth:"100%"}}/>
                    <h1 class="display-6 " >Hợp tác trong công việc, vui lòng liên hệ </h1>
                    <a href="mailto:abcdefabc@gmail.com" style={{fontSize:"26px", color:"#FD7F38"}}>abcdefabc@gmail.com</a>
                    <p style={{fontSize:"22px"}}>Hoặc</p>
                    <form className="form-inline my-2 my-lg-0" style={{display:"flex", justifyContent:"center",fontSize:"30px"}}>   
                        
                        <a href="https://www.facebook.com/nguyenvancloud" target="_blank">  
                            <ImFacebook2 className='icon-nav' />
                        </a>
                        <a href="https://www.instagram.com/_mizzzz01/?fbclid=IwAR3PgytqpGRggGUKDpTURtAyEoklkCtbdc-okAj29nwDgmnAosTSwjg94RA" target="_blank">
                            <GrInstagram className='icon-nav'/>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}; 

export default ContactAdmin;    