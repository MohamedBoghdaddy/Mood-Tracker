import HeroSection from "./HeroSection";
import MoodList from "./MoodList"; // Assuming you're displaying mood entries instead of stories
import SubscribeSection from "./SubscribeSection"; // Replacing CallToActionSection with mood-related subscription
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="full-page">
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* MoodList Section to display recent mood entries */}
      <section id="mood-list">
        <MoodList />
      </section>

      {/* Subscribe to mood updates */}
      <section id="subscribe-section">
        <SubscribeSection />
      </section>
    </div>
  );
};

export default Home;
