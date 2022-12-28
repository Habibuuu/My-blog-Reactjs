import { useState } from "react";
import BlogList from "./BlogList";
 
const Home = () => {
    // let name = 'mario';
    const [blogs, SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Subscribe my blog', body: 'lorem ipsum...', author: 'habib', id: 4 }
    ]);
      
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'habib')} title="Habib Blogs" />
        </div>
    );
}
  
export default Home; 