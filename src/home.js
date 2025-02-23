import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs , isLoading , error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading ...</div>}
        {blogs && <BlogList blogs={blogs} title='all blogs!!!' ></BlogList> }
        </div>
    );
}

export default Home;