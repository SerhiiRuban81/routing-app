import {useParams} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";
const MyPostPage = ()=>{
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        axiosInstance.get(`/posts/${id}`)
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>setPost(resp.data))
        .catch(error=>console.error("Error using API", error));
    }, [])
    return (
        <>
        <h2>Post with id: {id}</h2>
        {
            !post ? (
                <div>Loading...</div>
            ) 
            : 
            (
                <h3>{post.title}</h3>
            )
        }
        </>
    );
}
export default MyPostPage;