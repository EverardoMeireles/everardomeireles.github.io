import { useFrame } from '@react-three/fiber';
import { path_points, path_points_simple_lookat_dict, path_points_lookat_dict } from "../PathPoints";
import * as THREE from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { HtmlDreiMenu } from "./HtmlDreiMenu";

export const Camera = React.memo((props) => {
    const useStore = props.useStore;
    const desired_path = useStore((state) => state.desired_path);
    const setTransitionEnded = useStore((state) => state.setTransitionEnded);

    const keyboardControlsSpeed = 0.4;
    const updateCallNow = useRef(false);
    const cam = useRef();
    const controls = useRef();
    const current_path = useRef("StartingPoint");
    const current_point = useRef(new THREE.Vector3( 15, 1, 0 ));
    const current_lookat = useRef(new THREE.Vector3(0, 3, 2));
    const simpleLookatMode = true;
    const desired_point = path_points[current_path.current + "-" + desired_path];

    let pathPointsLookat;
    let smooth;
    let sub_points;
    let tick = 0;

    var concat_paths;

    if(simpleLookatMode){
        pathPointsLookat = path_points_simple_lookat_dict;
        concat_paths = desired_path;
    }else{
        pathPointsLookat = path_points_lookat_dict;
        concat_paths = current_path.current + "-" + desired_path;
    }

    // control target is the last element of path_points_lookat_dict
    const constrolTargetX = pathPointsLookat[concat_paths][Object.keys(pathPointsLookat[concat_paths]).pop()].x;
    const constrolTargetY = pathPointsLookat[concat_paths][Object.keys(pathPointsLookat[concat_paths]).pop()].y;
    const constrolTargetZ = pathPointsLookat[concat_paths][Object.keys(pathPointsLookat[concat_paths]).pop()].z;

    console.log(current_path.current + "-" + desired_path);
    // used in custom camera lookat
    const desired_lookat_dict = (time) => {
        let nextLookat;
        Object.keys(pathPointsLookat[concat_paths]).forEach((time_key) => time >= time_key ? nextLookat = pathPointsLookat[concat_paths][time_key] : console.log());
        return nextLookat;
    };

    // Sets values after the camera movement is done 
    function updateCall(state){
        if(updateCallNow.current){
            setTransitionEnded(true);
            updateCallNow.current = false;
            current_path.current = desired_path;
            controls.current.enabled = true;
            state.events.enabled = true;
        }
    }

    // A function to smooth out the camera movement
    function smoothStep(x) {
        let Sn = -2 * Math.pow(x, 3) + 3 * Math.pow(x, 2);
        if(x >= 1){
            Sn = 1;
        }
        return Sn;
    }

    // Moves the camera every frame when the desired path changes
    useFrame((state) => (tick <= 1 ? (
        updateCallNow.current = true,
        state.events.enabled = false,
        controls.current.enabled = false,
        tick += 0.005,
        smooth = smoothStep(tick),

        sub_points = current_point.current = desired_point.getPointAt(smooth),
        
        current_lookat.current.lerp(desired_lookat_dict(smooth), 0.03),
        state.camera.lookAt(current_lookat.current),

        state.camera.position.x = sub_points.x,
        state.camera.position.y = sub_points.y,
        state.camera.position.z = sub_points.z)
        : (updateCall(state))
    ));

    // orbitcontrols keyboard control is not working, that's a workaround
    useEffect(()=>{
        window.addEventListener("keydown", (event) => {
            switch(event.code) {
                case "KeyP":
                console.log([Math.floor(cam.current.position.x), Math.floor(cam.current.position.y), Math.floor(cam.current.position.z)]);
                break;
                case "KeyW":
                cam.current.position.x += -keyboardControlsSpeed;
                controls.current.target.x += -keyboardControlsSpeed;
                break;
                case "KeyA":
                    cam.current.position.z += keyboardControlsSpeed;
                    controls.current.target.z += keyboardControlsSpeed;
                break;

                case "KeyS":
                    cam.current.position.x += keyboardControlsSpeed;
                    controls.current.target.x += keyboardControlsSpeed;
                break;
                case "KeyD":
                    cam.current.position.z += -keyboardControlsSpeed;
                    controls.current.target.z += -keyboardControlsSpeed;
                break;
                case "KeyQ":
                    cam.current.position.y += keyboardControlsSpeed;
                    controls.current.target.y += keyboardControlsSpeed;
                    cam.current.position.z += keyboardControlsSpeed;
                    controls.current.target.z += keyboardControlsSpeed;
                break;
                case "KeyE":
                    cam.current.position.y += keyboardControlsSpeed;
                    controls.current.target.y += keyboardControlsSpeed;
                    cam.current.position.z += -keyboardControlsSpeed;
                    controls.current.target.z += -keyboardControlsSpeed;
                break;
                case "KeyC":
                    cam.current.position.y += -keyboardControlsSpeed;
                    controls.current.target.y += -keyboardControlsSpeed;
                    cam.current.position.z += -keyboardControlsSpeed;
                    controls.current.target.z += -keyboardControlsSpeed;
                break;
                case "KeyZ":
                    cam.current.position.y += -keyboardControlsSpeed;
                    controls.current.target.y += -keyboardControlsSpeed;
                    cam.current.position.z += keyboardControlsSpeed;
                    controls.current.target.z += keyboardControlsSpeed;
                break;
                case "KeyR":
                    cam.current.position.y += keyboardControlsSpeed;
                    controls.current.target.y += keyboardControlsSpeed;
                break;
                case "KeyF":
                    cam.current.position.y += -keyboardControlsSpeed;
                    controls.current.target.y += -keyboardControlsSpeed;
                break;
            }
        });
    });

    return(
        <>
            <PerspectiveCamera ref = {cam} makeDefault fov = {75}>
                {/* <HtmlDreiMenu {...{useStore}}></HtmlDreiMenu> */}
            </PerspectiveCamera>
            <OrbitControls ref = {controls} target = {[constrolTargetX, constrolTargetY, constrolTargetZ]} />
        </>
    )
})