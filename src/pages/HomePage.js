import {useNavigate} from "react-router-dom";
const HomePage = ()=>{
    const navigate = useNavigate();
    return (
        <>
        <h2>Home page</h2>
        <h3>Start point of our site</h3>
        <hr></hr>
        <button onClick={()=>navigate("/about")}>About us</button>
        </>
    )
}
export default HomePage;