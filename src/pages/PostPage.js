import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
const PostPage = ()=>{
    const {id} = useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp=>resp.json())
        .then(data=>setPost(data))
        .catch(error=>console.error("Error using API", error))
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
export default PostPage;