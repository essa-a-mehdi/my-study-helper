import { useNavigate } from 'react-router-dom';
import { getCurrentWeek } from '../utils/dateUtils';

export default function DashboardPage() {
    const navigate = useNavigate();
    const courses = ["COMP2041", "COMP1511"];

    return(
        <div>
            <h1>DashboardPage</h1>
            <div>
                {getCurrentWeek()}
            </div>
            {courses.map((course) => (
                <div key={course} onClick={() => navigate(`/course/${course}`)}>
                    {course}
                </div>
            ))}
        </div>
    )
}   