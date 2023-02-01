import { BaseCube } from "./BaseCube";
import { Text3D } from "@react-three/drei";
import { useCallback, Suspense } from "react";
import * as THREE from "three";

export function IndexMenu(props) {
    const {setPath, setTransitionEnded} = props.useStore();
    const {rotation = 2 * Math.PI} = props;
    const {scale = 1} = props;
    const {textColor = "#000000"} = props;

    
    const textCallbackRef = useCallback(
        ref => ref != null ? (ref.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0) , (Math.PI/2))):console.log("skip render")
        )

    const wholeCallbackRef = useCallback(
        ref => ref != null ? (ref.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0) , (rotation))):console.log("skip render")
        )

    return(
        <mesh 
        scale={scale}
        ref={wholeCallbackRef}>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("projects");
                setTransitionEnded(false);
            }}
            position = {[0,0,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={10}
                hasMovementAnimation={false}
                hasScaleAnimation={false}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 1.7]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Education
                            <meshStandardMaterial color = {textColor} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("Competences");
                setTransitionEnded(false);
            }}
            position = {[0,1,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1}
                height={1}
                depth={10}
                hasMovementAnimation={false}
                hasScaleAnimation={false}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 2.5]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Compétences
                            <meshStandardMaterial color = {textColor} />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>
            <mesh
            onClick = {(e) => {
                e.stopPropagation();
                setPath("experiencePro");
                setTransitionEnded(false);
            }}
            position = {[0,2,2]}
            >
                <BaseCube
                position={[0,0,0]} 
                width={1} 
                height={1} 
                depth={10}
                hasMovementAnimation={false}
                hasScaleAnimation={false}
                hasChangeColorOnHover={false}
                >
                    <Suspense fallback = {null}>
                        <Text3D
                        position = {[0.5, -0.25, 4.7]}//Use a more standardised approach
                        ref = {textCallbackRef}
                        font = {process.env.PUBLIC_URL + "/roboto.json"}
                        size = {0.575}
                        height = {0.065}
                        curveSegments = {12}
                        >
                            Éxperience professionnelle
                            <meshStandardMaterial color = {textColor}  />
                        </Text3D>
                    </Suspense>
                </BaseCube>
            </mesh>

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
    </mesh>
    );
}