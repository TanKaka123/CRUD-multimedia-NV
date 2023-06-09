import axios from "axios";

const createParentComment = (idLog, currentUser,inputComment, setListComments, setIsLoading) => {
   var id="123", fullname="Ẩn danh", avatar="https://i.ibb.co/SxhgkWD/chicken.png"
    if(currentUser)
   {
    id= currentUser.id
    fullname=currentUser.fullname
    avatar = currentUser.avatar
   }
  axios
    .post(`https://backend-nv.vercel.app/api/v1/comment/${idLog}`,{ 
        content:inputComment,
        author_id:id,
        full_name_author:fullname,
        avatar_author:avatar,
    })
    .then((response) => { 
      setListComments(prevData => [response.data,...prevData]); 
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

const createChildComment = (idLog, idParent,  currentUser,inputComment) => {
  var id="123", fullname="Ẩn danh", avatar="https://i.ibb.co/SxhgkWD/chicken.png"
   if(currentUser)
  {
   id= currentUser.id
   fullname=currentUser.fullname
   avatar = currentUser.avatar
  }
 axios
   .post(`https://backend-nv.vercel.app/api/v1/comment/${idLog}/${idParent}`,{    
       content:inputComment,
       author_id:id,
       full_name_author:fullname,
       avatar_author:avatar
   })
   .then((response) => { 
    console.log(response);
   })
   .catch((error) => {
     console.log("Error get Vlog", error);
   });
};
const getComments = (idLog, setComments) => {

   axios
     .get(`https://backend-nv.vercel.app/api/v1/comment/${idLog}`)
     .then((response) => { 

        setComments(response.data);
     })
     .catch((error) => {
       console.log("Error get Vlog", error);
     });
 };

 const getChildComments = (idLog, idParent, setComments) => {

  axios
    .get(`https://backend-nv.vercel.app/api/v1/comment/${idLog}/${idParent}`)
    .then((response) => { 
       setComments(response.data);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

const regetApiComments = (idLog, setComments) => {

  axios
    .get(`https://backend-nv.vercel.app/api/v1/comment/${idLog}`)
    .then((response) => {     
       setComments(prevData => [response.data[0],...prevData]);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

export { createParentComment, getComments, createChildComment, getChildComments,  };
