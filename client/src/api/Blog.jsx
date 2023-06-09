import axios from "axios";

const getBlogs = (setListBlog, setLoading = ()=>{}) => {
  axios
    .get("https://backend-nv.vercel.app/api/v1/blog")
    .then((response) => {
      setListBlog(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    });
};

const getBlog = (param, setItemBlog) => {
  axios
    .get(`https://backend-nv.vercel.app/api/v1/blog/${param}`)
    .then((response) => {
      setItemBlog(response.data);
    })
    .catch((error) => {
      console.log(error)
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
    .post(`https://backend-nv.vercel.app/api/v1/blog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((response) => {
      setStatus(true)
    })
    .catch((error) => {
      setStatus(false)
    });
};

const deleteBlog =(id, thumbnail, setStatusDelete)=>{

  const lastIndex = thumbnail.lastIndexOf('/');
  let result = thumbnail.substring(lastIndex + 1);

  axios
    .delete(`https://backend-nv.vercel.app/api/v1/blog/${id}/${result}`)
    .then((respnse)=>{
      setStatusDelete(true);
    })
    .catch((error)=>{
      setStatusDelete(false); 
    })
}
const increaseLove = (idPost) => {
  axios
    .post(`https://backend-nv.vercel.app/api/v1/blog/increaseLove/${idPost}`)
    .then((response) => {
      console.log("Increased")
    })
    .catch((error) => {
      console.log(error)
    });
};

const decreaseLove = (idPost) => {
  axios
    .post(`https://backend-nv.vercel.app/api/v1/blog/decreaseLove/${idPost}`)
    .then((response) => {

    })
    .catch((error) => {
      console.log(error)
    });
};

const updateView = (idPost) => {
  axios
    .post(`https://backend-nv.vercel.app/api/v1/blog/updateView/${idPost}`)
    .then((response) => {
    })
    .catch((error) => {
      console.log(error)
    });
};

export { getBlogs, PostBlog, getBlog, increaseLove, decreaseLove, updateView, deleteBlog };
