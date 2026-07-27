import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Govardhini"
        school="Vignan's Institute of Engineering for Women"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;