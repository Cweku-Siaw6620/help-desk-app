import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HelpDeskLanding from "./helpDeskLanding";
import KnowledgeBase from "./knowledgeBased";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HelpDeskLanding />} />

        {/* Knowledge Base Page */}
        <Route path="/knowledgebase" element={<KnowledgeBase />} />
      </Routes>
    </Router>
  );
};

export default App;
