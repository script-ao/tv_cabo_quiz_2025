import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "../../context/quizContext";

import {
  Start,
  Intro,
  World,
  Trivia,
  Win,
  Lose,
  Register,
  Certificate,
  Lead,
} from "../../screens";
import { AppLayout } from "../../layouts";

function AppRouter() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Start />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/world" element={<World />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/win" element={<Win />} />
            <Route path="/lose" element={<Lose />} />
            <Route path="/register" element={<Register />} />
            <Route path="/certificate" element={<Certificate />} />
          </Route>
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export { AppRouter };
