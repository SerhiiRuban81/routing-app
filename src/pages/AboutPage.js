import {useNavigate} from "react-router-dom"; 
const AboutPage = ()=>{
    const navigate = useNavigate();
    return (
        <>
        <h2>About our company</h2>
        <h3>Our services:</h3>
        <ul>
            <li>Software Development</li>
            <li>System Integration</li>
        </ul>
        <hr></hr>
        <button onClick={()=>navigate("/")}>Go Home</button>
        </>
    )
}
export default AboutPage;