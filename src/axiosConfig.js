import axios from "axios";
const instance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/posts"
})
export default instance