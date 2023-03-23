import axios from "axios";


const getReviews = (setListReview, setLoading) => {
  axios
    .get("")
    .then((response) => {
      setListReview(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.log("Error get Review", error);
    });
};

const getReview = (param, setItemReview) => {
  axios
    .get(``)
    .then((response) => {
      setItemReview(response.data);
    })
    .catch((error) => {
      console.log("Error get Review", error);
    });
};

const PostReview = ( valueReview, thumbnail, currentUser ) => {
 
  axios
    .post("https://backend-nv.vercel.app/api/v1/review", {
        id_author: currentUser.id,
        name_author: currentUser.fullname,
        avatar_author: currentUser.avatar,
        title: valueReview.title,
        thumbnail: thumbnail,
        content: valueReview.content,
        url_product:  valueReview.url_product
    })
    .then((response) => {
      console.log("DATA REVIEW", response.data);
    })
    .catch((error) => {
        console.log("Error REVIEW ", error)
    });
    
};
const deleteReview =(id, thumbnail)=>{

  const lastIndex = thumbnail.lastIndexOf('/');
  let result = thumbnail.substring(lastIndex + 1);

  console.log(result)
  axios
    .delete(``)
    .then((response)=>{
      
    })
    .catch((error)=>{
      console.log(error)
     
    })
}
export { getReviews, PostReview, getReview, deleteReview  };
