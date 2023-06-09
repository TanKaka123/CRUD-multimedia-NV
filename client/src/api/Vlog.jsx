import axios from "axios";

const getVlogs = (setListVlog, setLoading) => {
 
  axios
    .get(`https://backend-nv.vercel.app/api/v1/vlog`)
    .then((response) => {
      setListVlog(response.data);
      setLoading(false)
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

const getVlog = (param, setItemVlog) => {
  axios
    .get(`https://backend-nv.vercel.app/api/v1/vlog/${param}`)
    .then((response) => {
      setItemVlog(response.data);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

const postVlog = (inputs, currentUser, setStatusPost) => {
  let formData = new FormData();

  formData.append("photo", inputs.thumbnail);
  formData.append("id_author", currentUser.id);
  formData.append("name_author", currentUser.fullname);
  formData.append("avatar_author", currentUser.avatar_author);
  formData.append("title", inputs.title);
  formData.append("content", inputs.content);
  formData.append("video_url", inputs.video_url);
  console.log(formData)
  axios
    .post(`https://backend-nv.vercel.app/api/v1/vlog`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((response) => {
      setStatusPost(true)
      console.log(response.data)
    })
    .catch((error) => {console.log(error)});
};


const deleteVlog =(id, thumbnail, setStatusDelete)=>{

  const lastIndex = thumbnail.lastIndexOf('/');
  let result = thumbnail.substring(lastIndex + 1);
  axios
    .delete(`https://backend-nv.vercel.app/api/v1/vlog/${id}/${result}`)
    .then((respnse)=>{
      setStatusDelete(true);
    })
    .catch((error)=>{
      console.log(error)
      setStatusDelete(false); 
    })
}



export { getVlogs, getVlog, postVlog, deleteVlog };
