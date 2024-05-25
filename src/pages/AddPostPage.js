import { useForm } from "react-hook-form";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";
const AddPostPage = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()
    const onSubmit = (data) => {
        axiosInstance.post("/posts", data,
        // axios.post("https://jsonplaceholder.typicode.com/posts", data,
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }
        )
            .then(resp => {
                // console.log("Створено новий пост:", resp.data);
            })
            .catch(error => console.error("Error!", error));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={
                        handleSubmit(onSubmit)
                    } method="post">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" name="title" id="title" className="form-control"
                                {...register("title",
                                    {
                                        required: true,
                                        minLength: 10
                                    })}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Message</label>
                            <textarea name="body" id="body" className="form-control"
                                {...register("body")}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">User Id</label>
                            <input type="number" name="userId" id="userId" className="form-control"
                                {...register("userId",
                                    {
                                        required: true,
                                    })}></input>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-outline-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddPostPage;