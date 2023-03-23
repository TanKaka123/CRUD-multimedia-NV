import axios from "axios";

const getBlogs = (setListBlog,setLoading) => {
  axios
    .get("")
    .then((response) => {
      setListBlog(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.log("Error get Blog", error);
    });
};

const getBlog = (param, setItemBlog) => {
  console.log("dsadsadas");
  axios
    .get(`https://backend-nv.vercel.app/api/v1/blog/${param}`)
    .then((response) => {
      console.log(response.data);
      setItemBlog(response.data);
    })
    .catch((error) => {
      console.log("Error get Blog", error);
    });
};

const PostBlog = (valueBlog, currentUser, setStatus) => {
  let formData = new FormData();

  formData.append("photo", valueBlog.thumbnail);
  formData.append("id_author", currentUser.id);
  formData.append("name_author", currentUser.fullname);
  formData.append("avatar_author", currentUser.avatar_author);
  formData.append("title", valueBlog.title);
  formData.append("content", valueBlog.content);
  axios
    .post("", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((response) => {
      console.log("DATA BLOG", response.data);
      setStatus(true)
    })
    .catch((error) => {
      setStatus(false)
      console.log("Error BLOG ", error);
    });
};
// increaseLove
// decreaseLove
// updateView

const deleteBlog =(id, thumbnail, setStatusDelete)=>{

  const lastIndex = thumbnail.lastIndexOf('/');
  let result = thumbnail.substring(lastIndex + 1);

  console.log(result)
  axios
    .delete(``)
    .then((respnse)=>{
      setStatusDelete(true);
    })
    .catch((error)=>{
      console.log(error)
      setStatusDelete(false); 
    })
}
const increaseLove = (idPost) => {
  axios
    .post(``)
    .then((response) => {
      console.log("success");
    })
    .catch((error) => {
      console.log("Error BLOG ", error);
    });
};

const decreaseLove = (idPost) => {
  axios
    .post(``)
    .then((response) => {
      console.log("success");
    })
    .catch((error) => {
      console.log("Error BLOG ", error);
    });
};

const updateView = (idPost) => {
  axios
    .post(``)
    .then((response) => {
      console.log("success");
    })
    .catch((error) => {
      console.log("Error BLOG ", error);
    });
};

export { getBlogs, PostBlog, getBlog, increaseLove, decreaseLove, updateView, deleteBlog };
