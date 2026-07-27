import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks=true;
  const showBlogs=true;
  const showCourses=true;

  return(

    <div>

      <h1>Blogger App</h1>

      {showBooks && <BookDetails/>}

      {showBlogs && <BlogDetails/>}

      {showCourses && <CourseDetails/>}

    </div>

  );

}

export default App;