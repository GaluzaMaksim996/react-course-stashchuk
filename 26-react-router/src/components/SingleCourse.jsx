import courses from "../data/courses";
import {Link, useNavigate, useParams} from "react-router-dom";
import NotFound from "./NotFound";
import {useEffect} from "react";

function SingleCourse() {
  const {slug} = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === slug);

  useEffect(() => {
    if (!course) {
      navigate('..', {relative: 'path'});
    }
  }, [course, navigate]);


  if (!course) {
    return <NotFound/>;
  }

  return (
    <div>
      <h1>Single course info</h1>
      <h3>{course?.title}</h3>
      <h3>{course?.slug}</h3>
      <Link to={'..'} relative='path'>All courses</Link>
    </div>
  )
}

export default SingleCourse;