import { QuoterProvider } from "./context/QuoterProvider";
import AppSecure from "./components/AppSecure";
import useQuoter from "./hooks/useQuoter";

function App() {
  return (
    <QuoterProvider>
      <AppSecure />
    </QuoterProvider>
  );
}

export default App;
