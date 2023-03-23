import axios from "axios";

const getVlogs = (setListVlog, setLoading) => {
 
  axios
    .get("")
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
    .get(``)
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
    .post("", formData, {
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



export { getVlogs, getVlog, postVlog, deleteVlog };
