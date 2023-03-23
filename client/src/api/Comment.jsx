import axios from "axios";

const createParentComment = (idLog, currentUser,inputComment) => {
   var id="123", fullname="Ẩn danh", avatar="https://i.ibb.co/SxhgkWD/chicken.png"
    if(currentUser)
   {
    id= currentUser.id
    fullname=currentUser.fullname
    avatar = currentUser.avatar
   }
  axios
    .post(``,{
       
        content:inputComment,
        author_id:id,
        full_name_author:fullname,
        avatar_author:avatar,
    })
    .then((response) => { 
      console.log(response.data);
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
  console.log(`}`,{
      
  content:inputComment,
  author_id:id,
  full_name_author:fullname,
  avatar_author:avatar
})
 axios
   .post(``,{
      
       content:inputComment,
       author_id:id,
       full_name_author:fullname,
       avatar_author:avatar
   })
   .then((response) => { 
     console.log(response.data);
   })
   .catch((error) => {
     console.log("Error get Vlog", error);
   });
};
const getComments = (idLog, setComments) => {

   axios
     .get(``)
     .then((response) => { 
        console.log(response.data)
        setComments(response.data);
     })
     .catch((error) => {
       console.log("Error get Vlog", error);
     });
 };

 const getChildComments = (idLog, idParent, setComments) => {

  axios
    .get(``)
    .then((response) => { 
       console.log(response.data)
       setComments(response.data);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

const regetApiComments = (idLog, setComments) => {

  axios
    .get(``)
    .then((response) => {     
       setComments(prevData => [response.data[0],...prevData]);
    })
    .catch((error) => {
      console.log("Error get Vlog", error);
    });
};

export { createParentComment, getComments, createChildComment, getChildComments, regetApiComments };
