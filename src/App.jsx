import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./SceneContainer";
import { HudMenu } from "./components/HudMenu";
import create from 'zustand';

function App() {
  const useStore = create((set) => ({
    desired_path: "MainMenu",
    setPath: (desired) => set(() => ({desired_path: desired})),
    transitionEnded: false,
    setTransitionEnded: (ended) => set(() => ({transitionEnded: ended})),
    graphicalModes: ["potato", "potatoPremium", "normal", "high"],
    currentGraphicalMode: "",
    // if graphicalModes wont be out of range, update currentGraphicalMode
    setGraphicalMode: (mode) => set((state) => ({currentGraphicalMode: mode})),
    finishedBenchmark: false,
    setFinishedBenchmark: (finished) => set(() => ({finishedBenchmark: finished})),
    //skills: ["Python", "C#", "JavaScript", "React", "Three.js", "blender", "SQL", "HTML/CSS", "anglais", "portugais"],
    currentSkillHovered: "Python",
    setSkillHovered: (skill) => set((state) => ({currentSkillHovered: skill})),
    //Languages: ["Python", "C#", "JavaScript", "React", "Three.js", "blender", "SQL", "HTML/CSS", "anglais", "portugais"],
    currentLanguage:"English",
    setLanguage: (language) => set((state) => ({currentLanguage: language})),

    }))
  return (
    <>
      <HudMenu {...{useStore}}/>
      <Canvas>
        <SceneContainer {...{useStore}}/>
      </Canvas>
    </>
  );
}

export default App;