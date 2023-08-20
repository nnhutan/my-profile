import { lazy, Suspense, useEffect, useRef } from "react";
import {
  Container,
  Fab,
  LinearProgress,
  Toolbar,
  useColorScheme,
} from "@mui/material";
import Header from "./components/Header";
import ParticlesBG from "./components/Particles";
import Infor from "./components/Infor";

const About = lazy(() => import("./components/About"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Experience = lazy(() => import("./components/Experience"));
const More = lazy(() => import("./components/More"));
import ScrollTop from "./components/ScrollTop";
import { KeyboardArrowUp } from "@mui/icons-material";

function App() {
  const inforRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const { mode } = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      const target = window.location.href.split("#")[1];

      switch (target) {
        case "about":
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "projects":
          projectRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "skills":
          skillRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "experiences":
          experienceRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "more":
          moreRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }, 500);
  }, []);

  const handleScroll = (item: string) => {
    switch (item) {
      case "Infor":
        inforRef.current?.scrollIntoView({ behavior: "smooth" });
        window.location.href = "#home";
        break;
      case "About":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Skills":
        skillRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Experiences":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "More":
        moreRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Resume":
        window.open(
          "https://dinhnhutan.notion.site/DINH-NHU-TAN-fbaf5cec35b2471c8a24922572f5cbbf?pvs=4",
          "_blank",
        );
      default:
        break;
    }
  };

  return (
    <div
      className={mode === "light" ? "bg-light-mode min-vh-100" : "min-vh-100"}
    >
      <ParticlesBG />
      <Header handleScroll={handleScroll} />
      <Toolbar id="back-to-top-anchor" />
      <Container maxWidth="xl">
        <Infor ref={inforRef} handleScroll={handleScroll} />
        <Suspense fallback={<LinearProgress color="success" />}>
          <About ref={aboutRef} />
          <Project ref={projectRef} />
          <Skill ref={skillRef} />
          <Experience ref={experienceRef} />
          <More ref={moreRef} />
        </Suspense>
      </Container>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
