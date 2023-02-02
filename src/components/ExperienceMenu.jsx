import { BaseCube } from "./BaseCube";
import { Text3D } from "@react-three/drei";
import { useCallback, Suspense, useRef } from "react";
import * as THREE from "three";
import { useSpring, a } from '@react-spring/three';
import { path_points_experience_menu_location } from "../PathPoints";

export function ExperienceMenu(props) {
    // const {rotation = 2 * Math.PI} = props;
    // const {position = [0, 0, 0]} = props;
    const {scale = 1} = props;
    const {textColor = "#062d69"} = props;
    const {transitionDuration = 1000} = props;

    const {setPath, setTransitionEnded, transitionEnded, desired_path} = props.useStore();

    const isPathExperienceMenu = desired_path.includes("ProfessionalExpProjects"); // is the user going to the professional experience and projects

    let rotation = Math.PI;
    let position = [0, 0, 0];

    if(isPathExperienceMenu){
        rotation = path_points_experience_menu_location[desired_path]["rotation"]
        position = path_points_experience_menu_location[desired_path]["position"]
    }

    const spring = useSpring({
        position: setTransitionEnded ? position : [0,0,0],
        config: {
            duration:transitionDuration
        }
    });

    // const springFade = useSpring({
    //     opacity: (transitionEnded && isPathExperienceMenu) ? 1 : 0,
    //     config: {
    //         duration:transitionDuration
    //     }
    // })

    const textCallbackRef = useCallback(
        ref => ref != null ? (ref.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0) , (Math.PI/2))):console.log()
        )

    const wholeCallbackRef = useCallback(
        ref => ref != null ? (ref.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0) , (rotation))):console.log()
        )

    return(
        <>
        {(isPathExperienceMenu) &&
        <a.mesh
        position={spring.position}
        scale={scale}
        ref={wholeCallbackRef}
        >
                        <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("MainMenu");
                setTransitionEnded(false);
            }}
            position = {[0,13,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}

                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.3]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Menu Principal
                            <meshBasicMaterial color = {"red"} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("Education");
                setTransitionEnded(false);
            }}
            position = {[0,12,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}

                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.3]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Formation
                            <meshBasicMaterial color = {"red"} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("Skills");
                setTransitionEnded(false);
            }}
            position = {[0,11,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}

                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.3]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Compétences
                            <meshBasicMaterial color = {"red"} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects0");
                setTransitionEnded(false);
            }}
            position = {[0,10,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}

                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.3]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Prospere ITB
                            <meshBasicMaterial color = {textColor} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects1");
                setTransitionEnded(false);
            }}
            position = {[0,9,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1}
                height={1}
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 1]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            DRIM
                            <meshBasicMaterial color = {textColor} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects2");
                setTransitionEnded(false);
            }}
            position = {[0,8,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 1.2]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Everial
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects3");
                setTransitionEnded(false);
            }}
            position = {[0,7,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.9]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Brésil eco-buggy
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects4");
                setTransitionEnded(false);
            }}
            position = {[0,6,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 3]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            EFN projet PPMS
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects5");
                setTransitionEnded(false);
            }}
            position = {[0,5,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            EFN Professeur 
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            {/* <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects6");
                setTransitionEnded(false);
            }}
            position = {[0,4,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            2
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects7");
                setTransitionEnded(false);
            }}
            position = {[0,3,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            3
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects8");
                setTransitionEnded(false);
            }}
            position = {[0,2,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            4
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects9");
                setTransitionEnded(false);
            }}
            position = {[0,1,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            5
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects10");
                setTransitionEnded(false);
            }}
            position = {[0,0,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            6
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("ProfessionalExpProjects11");
                setTransitionEnded(false);
            }}
            position = {[0,-1,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={6.5}
                hasMovementAnimation={false}
                hasScaleAnimation={true}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 0.8]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            7
                            <meshBasicMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh> */}

        {/* <BaseCube position = {[0,1,0]} movementVector = {[0.1, 0, 0]} />
        <BaseCube position = {[0,2,0]} />
        <BaseCube position = {[0,3,0]} />
        <BaseCube position = {[0,4,0]} />
        <BaseCube position = {[0,5,0]} />
        <BaseCube position = {[0,6,0]} />
        <BaseCube position = {[0,1,1]} />
        <BaseCube position = {[0,2,1]} />
        <BaseCube position = {[0,3,1]} />
        <BaseCube position = {[0,4,1]} />
        <BaseCube position = {[0,5,1]} />
        <BaseCube position = {[0,6,1]} />
        <BaseCube position = {[0,1,2]} />
        <BaseCube position = {[0,2,2]} />
        <BaseCube position = {[0,3,2]} />
        <BaseCube position = {[0,4,2]} />
        <BaseCube position = {[0,5,2]} />
        <BaseCube position = {[0,6,2]} />
        <BaseCube position = {[0,1,3]} />
        <BaseCube position = {[0,2,3]} />
        <BaseCube position = {[0,3,3]} />
        <BaseCube position = {[0,4,3]} />
        <BaseCube position = {[0,5,3]} />
        <BaseCube position = {[0,6,3]} />
        <BaseCube position = {[0,1,4]} />
        <BaseCube position = {[0,2,4]} />
        <BaseCube position = {[0,3,4]} />
        <BaseCube position = {[0,4,4]} />
        <BaseCube position = {[0,5,4]} />
        <BaseCube position = {[0,6,4]} /> */}
    </a.mesh>}
    </>
    );
}