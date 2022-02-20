import { Link } from "react-router-dom";
import Card from "../components/shared/Card.js";
export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          similique earum? Id repudiandae delectus laborum!
        </p>
        <p>Version: 1.0.0</p>
        <p><Link to="/">Home</Link></p>
        
      </div>
    </Card>
  );
}
