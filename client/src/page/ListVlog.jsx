import React from 'react';
import "../assets/css/listpost.css";
import { useState, useEffect} from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Title from "../components/Title";
import { getVlogs } from '../api/Vlog';
import Spinner from "../components/Spinner/Spinner";

function ListVlog() {
    const [listVlog, setListVlog] = useState(null);
    const [ openLoading, setLoading ] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        getVlogs(setListVlog,setLoading)
        setTimeout(()=>{
            if(openLoading){
                setLoading(false);
            }
        },3000)
      }, []);

      const getText=(html)=>{
        html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
        html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
        html = html.replace(/<\/div>/ig, '\n');
        html = html.replace(/<\/li>/ig, '\n');
        html = html.replace(/<li>/ig, '  *  ');
        html = html.replace(/<\/ul>/ig, '\n');
        html = html.replace(/<\/p>/ig, '\n');
        html = html.replace(/<br\s*[\/]?>/gi, "\n");
        html = html.replace(/<[^>]+>/ig, '');
        return html;
      }
    return (
        <section className="wrapper"> 
          {openLoading &&  <Spinner/>}
        <div className="container-fostrap"> 
        <Title content="VLOG"/>
            <div className="content"  style={{marginTop:"70px"}}>
                <div className="container-list-post">
                   
                        { listVlog && listVlog.map((value, index)=>{
                                    const linkTo = `/list-vlog/watch/${value.id}`;
                                    return (
                                        <Link  
                                        to={linkTo} style={{textDecoration:"none", color:"black"}} 
                                        type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        key={index}
                                        >  
                                            <div className="cards">
                                                <div className="img-card container-image_post" href="">
                                                    <img src={value.thumbnail} className="image_post"/> 
                                                    <div className="overlay-image_post">
                                                        <div className="text-overlay" style={{fontSize:"50px"}}><BsFillPlayCircleFill/></div>
                                                    </div>
                                                </div>
                                           
                                                <div className="card-content" style={{height:"150px"}}>
                                                    <div className="card-title item_title" style={{ height: "60px" }} >
                                                        <span className="width ellipse two-lines"> {value.title} </span>
                                                    </div>
                                                    <span className="width ellipse two-lines">
                                                        {getText(value.content)}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link> 
                                    )
                            })
                        } 
                 
                </div>
            </div>
        </div>
    </section>
    
    );
}

export default ListVlog;