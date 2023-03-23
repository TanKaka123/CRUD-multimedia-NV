import React from "react";
import { useEffect } from "react";

const IntroAdmin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="container"
      style={{ paddingTop: "50px", paddingBottom: "50px" }}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <img
            src={require("../assets/image/about.jpg")}
            alt="avatar "
            style={{ maxWidth: "100%", objectFit: "40%" }}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <p style={{ fontSize: "19px" }}>
            <span style={{fontWeight:"600"}}> Chào cậu!</span>
            <br />
            Là <b>Vân Mây Đây</b>. Mình là một cô gái đang học tập và làm việc tại Sài
            Gòn, là một cô gái nhỏ ôm trong mình nhiều giấc mộng và hoài bão
            lớn. Mình là một cô gái bình thường đang trong quá trình trưởng
            thành, thích sự dịu dàng, sự bình yên và yêu những điều bình dị.
            <br />
            <br />
            <span style={{fontSize:"30px", fontWeight:"600"}}>Nhiều hơn về mình...</span> <br/>
           
            Mình sinh ra và lớn lên ở vùng quê nhỏ ven biển Thanh Hóa. Mình đã
            chuyển đến Nha Trang sinh sống 5 năm. Hiện tại mình đang học tập và
            làm việc tại Sài Gòn. Với mình, giờ đây, Nha Trang chính là nhà, nơi
            đó luôn là nơi mình hướng về dù mình ở bất cứ đâu.
            <br />
            <br />
            Mình học về kinh tế, mình thích việc viết lách và sáng tạo nội dung,
            thích kinh doanh và thích được làm việc với con người. Mình thích
            Trung Quốc và mong muốn được đặt chân đến nơi này để học tập.
            <br />
            <br />
            Như bao người khác, trong hành trình trưởng thành, tất cả đối với
            mình chưa bao giờ là dễ dàng. Tuy nhiên, mình luôn trân trọng từng
            chuyện mình trải qua, từng vấp ngã, từng cú sốc và cả những nỗi đau
            trên hành trình ấy.
            <br />
            <br />
            Bây giờ, mình không phải một người thành công, mình không ở đây để
            chia sẻ những bài học làm sao để thành công. Bởi chính mình vẫn đang
            loay hoay trên đoạn đường rất dài để chinh phục “sự thành công” cho
            riêng mình. Mình ở đây để viết lên những cảm xúc, những chia sẻ,
            những suy nghĩ, những góc nhìn trong cả hành trình đã qua, bây giờ
            và sắp tới của mình. Hi vọng rằng, cậu có thể tìm được chút gì đó
            bình dị ở đây.
            <br />
            <br />
            <span style={{textAlign:"center", fontStyle:"italic"}}>
            “Go forward!
            <br/>
            Ahead is light!”
            </span>
            <br />
            <span style={{fontWeight:"600"}}>
            Cảm ơn cậu. Chúc cậu một ngày an yên!
            </span>
           
          </p>
        </div>
      </div>    
    </div>
  );
};

export default IntroAdmin;
