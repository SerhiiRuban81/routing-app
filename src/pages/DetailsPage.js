import { useSearchParams } from "react-router-dom";
const DetailsPage = ()=>{
    const [searchParams] = useSearchParams();
    return (
        <>
        <h3>Surname: {searchParams.get("surname")}</h3>
        <h3>Age: {searchParams.get("age")}</h3>
        </>
    )
}
export default DetailsPage;