import CalendarDashboard from "/src/components/CalendarDashboard.jsx";
import TaskDashboard from "/src/components/TaskDashboard.jsx";
import Footer from "/src/components/Footer.jsx";
import Header from "/src/components/Header.jsx";

import "/src/styles/App.css";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <TaskDashboard />
        <CalendarDashboard />
      </div>
      <Footer />
    </>
  );
}
export default App;
