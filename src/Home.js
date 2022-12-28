import { useState, useEffect } from "react";
import BlogList from "./BlogList";
 
const Home = () => { 
    const [blogs, SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Subscribe my blog', body: 'lorem ipsum...', author: 'habib', id: 4 }
    ]);

    const [name, setName] = useState('Habib');

    const handleDelete = (id) =>{ 
         const newBlogs = blogs.filter((blog) => blog.id !== id);
         SetBlogs(newBlogs);
    }
    
    useEffect(() => {
        console.log('user effect habib');
        console.log(name);
    }, [name]);
      
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Bibuu')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
  
export default Home; 