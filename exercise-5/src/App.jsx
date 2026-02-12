import { Info } from "./data";
import ProfileCard from "./components/ProfileCard.jsx";

export default function App() {
  return (
    <div className="app-container">
      <div className="card-grid">
        {Info.map((person) => (
          <ProfileCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
