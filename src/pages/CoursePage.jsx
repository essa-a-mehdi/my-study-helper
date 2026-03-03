import { useParams } from 'react-router-dom';
import { courses } from '../data/courseData';

export default function CoursePage() {
    const { courseId } = useParams();
    const course = courses[courseId];

    if (!course) {
        return (
            <div>
                <h1>Error! Course not found</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{course.name}</h1>
            <p>Faculty: {course.faculty}</p>
            <p>Tutorials: {course.tutorials}</p>
            <p>Labs: {course.labs}</p>
            <p>Lectures: {course.lectures}</p>
            <p>Assignments: {course.assignments}</p>
            <p>Exams: {course.exams}</p>
        </div>
    )
}