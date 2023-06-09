import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { getReviews, deleteReview } from "../api/Review";
import Spinner from "../components/Spinner/Spinner";
import { BsFillTrashFill } from "react-icons/bs";

const Reccommend = () => {
    const [listReviews, setListReviews ] = useState(null);
    const [ openLoading, setLoading ] = useState(true);
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user") || null)
      );
    
    useEffect(()=>{
        getReviews(setListReviews, setLoading);
        setTimeout(()=>{
          if(openLoading){
              setLoading(false);
          }
      },3000)
    },[]);
    const getText=(html)=>{
        const doc = new DOMParser().parseFromString( html ,"text/html")
        return doc.body.textContent
      }
  return (
    <section className="wrapper">
        {openLoading &&  <Spinner/>}
        <div className="container-fostrap"> 
        <Title content="GỢI Ý"/>
            <div className="content"  style={{marginTop:"70px"}}>
                <div className="container">
                    <div className="row">
                        <p style={{fontSize:"25px", textAlign:"left", marginBottom:"15px"}}>
                        Trang “Gợi ý” này được lập ra để tổng hợp những sản phẩm, dịch vụ, thương hiệu mà mình đã sử dụng và cảm thấy hữu ích. 
                        Tất cả đều được đánh giá dựa trên quan điểm cá nhân.
                        Hi vọng danh sách tổng hợp này có giá trị với cậu! 
                        </p>
                        <p style={{fontSize:"20px", color:"gray", marginBottom:"15px"}}>
                        Trang này sẽ được cập nhật thường xuyên 
                        </p>
                        <p style={{fontSize:"20px", textAlign:"left", marginBottom:"15px", marginBottom:"70px"}}>
                        <b style={{color:"orange"}}>Disclosure : </b> Một số đường link phía dưới là affiliate link. 
                        Nếu bạn đăng ký sử dụng dịch vụ hoặc mua sản phẩm qua link này, 
                        blog sẽ nhận được khoản hoa hồng nho nhỏ nhằm duy trì, phát triển bền vững và lớn mạnh hơn. 
                        </p>
                        {
                         
                            listReviews && listReviews.map((value, index)=>{
                                return (
                                    <div className="row" style={{marginBottom:"50px"}} key={index}>
                                        <img src={value.thumbnail} alt="image" className="col col-md-5  " style={{objectFit:"cover", height:"300px"}} />
                                        <div className="col col-md-7 " style={{ textAlign:"left",height:"300px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                            <div>
                                                <p style={{fontSize:"30px"}}>{value.title}</p>
                                                <p>{getText(value.content)}</p>
                                            </div>

                                            <p style={{borderTopWidth:"1px", borderColor:"gray", borderTopStyle:"solid", color:"grey"}}>{value.create_time}</p>
                                        </div>
                                        {currentUser && currentUser.is_admin &&      <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginTop:"30px"
                }}
              >
                <button
                  className="btn btn-outline-primary btn-lg"
                //   onClick={handleDeletePost}
                >
                  Cập nhật <BsFillTrashFill size="20px" />
                </button>
                <button
                  className="btn btn-outline-danger btn-lg"
                    onClick={()=>{
                        deleteReview(value.id,value.thumbnail)
                        const newArray = listReviews.filter(item => item.id !== value.id);
                        setListReviews(newArray);
                    }}

                >
                  Xóa <BsFillTrashFill size="20px" />
                </button>
              </div>}
                                        </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Reccommend;
