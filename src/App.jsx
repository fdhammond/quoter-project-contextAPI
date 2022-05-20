import { QuoterProvider } from "./context/QuoterProvider";
import AppSecure from "./components/AppSecure";

function App() {
  return (
    <QuoterProvider>
      <AppSecure />
    </QuoterProvider>
  );
}

export default App;
