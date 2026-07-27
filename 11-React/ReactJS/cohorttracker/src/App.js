import CohortDetails from "./Components/CohortDetails";

function App() {

  const cohort = {
    code: "DN4.0",
    technology: "React",
    trainer: "Cognizant",
    startDate: "20-Jul-2026",
    currentStatus: "Ongoing"
  };

  return (
    <div>
      <CohortDetails cohort={cohort}/>
    </div>
  );
}

export default App;