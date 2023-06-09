import axios from "axios";

const uploadImage = (inputs,setImageUrl) => {
  let formData = new FormData();
  formData.append("photo", inputs.thumbnail);
  axios
    .post(`https://backend-nv.vercel.app/file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },  
    })
    .then((response) => {
        setImageUrl(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
};

export { uploadImage };
