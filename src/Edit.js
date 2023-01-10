import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, SetIsPending] = useState(false);
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect ( () => {
        getBlogById();
    },[]);
    
    const getBlogById = async() => {
        const response = await fetch(`http://localhost:8080/blogs/${id}`);
        const data = await response.json()

        setTitle(data.title);
        setBody(data.body);
        setAuthor(data.author);
    }
    


    const UpdateSubmit = async(e) => {
        e.preventDefault();
        const blog = { title, body, author };

        SetIsPending(true);
        
        await fetch(`http://localhost:8080/blogs/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Blog Updating')
            SetIsPending(false);
            navigate('/');
        })
    }

    return (
        <div className="create">
            <h2>Edit Blogs</h2>
            <form onSubmit={UpdateSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={ title }
                onChange= {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={ body }
                onChange= {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={ author }
                    onChange= {(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Update Blog</button>}
                { isPending && <button disabled>Update Blog...</button>}
            </form>
        </div>
    );
}
 
export default Edit;