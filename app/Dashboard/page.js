import Main from "../../Components/Main";
import DashboardComponent from "../../Components/Dashboard"; // Renamed to avoid conflict
import Login from "../../Components/Login&Registration/Login";

export const metadata = {
  title: "Broodle ⋅ Dashboard",
};

export default function Dashboard() {
  const isAuthenticated = false; // Replace this with actual authentication logic

  return (
    <Main>
      {isAuthenticated ? (
        <DashboardComponent /> // If authenticated, render the Dashboard component
      ) : (
        <div>
          <p>Please log in to view the dashboard.</p>
          <Login /> {/* Render the Login component for the user to sign in */}
        </div>
      )}
    </Main>
  );
}
