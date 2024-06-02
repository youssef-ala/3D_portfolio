import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import {Footer,Navbar} from './components'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App() {
  return (
    <main className="bg=slate-300/20 h-full">
      <SpeedInsights/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer/>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}
