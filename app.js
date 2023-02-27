import axios from "axios";



const getData = async (id)=>{

const {data:getUser}= await axios("https://jsonplaceholder.typicode.com/users/"+id);
console.log(getUser);

const {data:getPost}= await axios("https://jsonplaceholder.typicode.com/posts/"+id);
console.log(getPost);
}

export default getData;