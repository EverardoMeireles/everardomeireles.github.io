import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Camera } from "./components/Camera";
import { SimpleLoader } from "./components/SimpleLoader";
import create from 'zustand';
import { IndexMenu } from "./components/IndexMenu";
import { ProjectsMenu } from "./components/ProjectsMenu";
import { OrbitingPointLight } from './components/OrbitingPointLights';
import { GraphicalModeSetter } from './components/GraphicalModeSetter';
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { OrbitingMenu } from "./components/OrbitingMenu";
import { FloatingTextSkills } from "./components/FloatingTextSkills";
import { FadingSlideShowModel } from "./components/FadingSlideShowModel";
import { FadingTextModel } from "./components/FadingTextModel";
import { ExperienceMenu } from "./components/ExperienceMenu";

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
    }))

export function SceneContainer() {
    const currentGraphicalMode = useStore((state) => state.currentGraphicalMode);
    const finishedBenchmark = useStore((state) => state.finishedBenchmark);

    return(
        <>
            <Suspense fallback = {null} >
                {/* <SimpleLoader></SimpleLoader> */}
                {/* <directionalLight intensity={0.4} position={[63,96,41]}></directionalLight> */}
                <Environment files={process.env.PUBLIC_URL + "/textures/dikhololo_night_1k.hdr"} background />
                <Environment files={process.env.PUBLIC_URL + "/textures/kloofendal_48d_partly_cloudy_puresky_1k.hdr"} background={"only"} />
                {/* <ambientLight intensity={0.1}></ambientLight> */}
                {finishedBenchmark == false && <GraphicalModeSetter {...{useStore}} />}
                <Camera {...{useStore}}></Camera>
                <FloatingTextSkills initialPosition={[-41, 0, 68]} rotation={3*(Math.PI/2)}></FloatingTextSkills >
                <OrbitingMenu orbitDistance={7.5} orbitCenterPosition={[-17, -34, -4]}/>
                {/* <FadingSlideShowModel {...{useStore}} />
                <FadingTextModel {...{useStore}} initialPosition={[0, 0, -10]} ></FadingTextModel> */}
                <SimpleLoader></SimpleLoader>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects0" initialPosition={[4, 8.5, -82.2]} rotation={2 * Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects4" initialPosition={[4, 28, -82.2]} rotation={2 * Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects8" initialPosition={[4, 49, -82.2]} rotation={2 * Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects1" initialPosition={[11.5, 8.5, -97]} rotation={Math.PI/2} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects5" initialPosition={[11, 28, -97]} rotation={Math.PI/2} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects9" initialPosition={[11, 49, -97]} rotation={Math.PI/2} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects2" initialPosition={[-4, 8.5, -105]} rotation={Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects6" initialPosition={[-4, 28, -105]} rotation={Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects10" initialPosition={[-4, 49, -105]} rotation={Math.PI} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects3" initialPosition={[-11, 8.5, -90]} rotation={3*(Math.PI/2)} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects7" initialPosition={[-11, 28, -90]} rotation={3*(Math.PI/2)} visible={false} textColor={"#FFFFFF"}/>
                <FadingTextModel {...{useStore}} textModelMenu="ProfessionalExpProjects11" initialPosition={[-11, 49, -90]} rotation={3*(Math.PI/2)} visible={false} textColor={"#FFFFFF"}/>
                <ExperienceMenu {...{useStore}} scale={0.7} /*position={[-7, 0, -81]} rotation={-Math.PI/3}*/></ExperienceMenu>
                <IndexMenu {...{useStore}} isMainMenu></IndexMenu>
                <IndexMenu {...{useStore}} position={[-24, -37.6, -0.5]} rotation={2 * Math.PI/12} scale={0.23} ></IndexMenu>
                <IndexMenu {...{useStore}} position={[-50, -2, 65]} rotation={  Math.PI} scale={0.35} ></IndexMenu>
                
            </Suspense>
            {(currentGraphicalMode == "potato")
            &&
            <group>
                <Suspense fallback = {null}>
                    <ambientLight />
                    {/* <IndexMenu {...{useStore}}></IndexMenu>
                    <ProjectsMenu {...{useStore}} /> */}
                </Suspense>
            </group>}
            {(currentGraphicalMode == "potatoExtra")
            && 
            <group>
                <Suspense fallback = {null}>
                    <OrbitingPointLight></OrbitingPointLight>
                    {/* <IndexMenu {...{useStore}}></IndexMenu>
                    <ProjectsMenu {...{useStore}} />  */}
                    {/* <SimpleLoader></SimpleLoader> */}
                </Suspense>
            </group>}
            {(currentGraphicalMode == "potatoPremium")
            && 
            <group>
                <Suspense fallback = {null}>
                    <OrbitingPointLight></OrbitingPointLight>
                    {/* <IndexMenu {...{useStore}}></IndexMenu>
                    <ProjectsMenu {...{useStore}} /> */}
                    {/* <SimpleLoader></SimpleLoader> */}
                </Suspense>
            </group>}
            {(currentGraphicalMode == "normal")
            && 
            <group>
                <Suspense fallback = {null}>
                    <OrbitingPointLight></OrbitingPointLight>
                    {/* <IndexMenu {...{useStore}}></IndexMenu>
                    <ProjectsMenu {...{useStore}} /> */}
                </Suspense>
            </group>}
            {(currentGraphicalMode == "high")
            && <group>
                <Suspense fallback = {null}>
                {/* <OrbitingMenu orbitCenterPosition={[15.5, 1.1, 0]}></OrbitingMenu> */}
                {/* <OrbitingPointLight></OrbitingPointLight> */}
                {/* <IndexMenu {...{useStore}}></IndexMenu>
                <ProjectsMenu {...{useStore}} />  */}
                {/* <EffectComposer renderPriority={1}>
                    <Bloom luminanceThreshold={1} mipmapBlur />
                </EffectComposer> */}
                </Suspense>
            </group>}
        </>
    );
}