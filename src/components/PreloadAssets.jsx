import React, { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const PreloadAssets = (props) => {
  const useStore = props.useStore;

  const {texturesToLoad = ["image1.jpg", "image2.jpg"]} = props;
  const {scenesToLoad = ["scene1.glb", "scene2.glb"]} = props;
  const {delay = 3000} = props;

  const setPreloadDone = useStore((state) => state.setPreloadDone);

  const [startLoading, setStartLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartLoading(true);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [delay]);

  const texturePaths = texturesToLoad.map(texture => process.env.PUBLIC_URL + '/textures/' + texture);
  const scenePaths = scenesToLoad.map(scene => process.env.PUBLIC_URL + '/models/' + scene);

  const textures = useLoader(TextureLoader, startLoading ? texturePaths : []);
  const scenes = useLoader(GLTFLoader, startLoading ? scenePaths : []);

  // console.log("loaded textures!", textures);
  // console.log("loaded models!", scenes);
  useEffect(() => {
    if (startLoading) {
      console.log("loaded textures!", textures);
      console.log("loaded models!", scenes);
      setPreloadDone(true)
    }
  }, [startLoading, textures, scenes]);

  return null;
};