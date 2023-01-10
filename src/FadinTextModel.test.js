import ReactThreeTestRenderer from '@react-three/test-renderer';
import { FadingTextModel } from "./FadingTextModel";
import create from 'zustand';

test('The correct number of 3D text lines are rendered', async () => {
    const useStore = create(() => ({
        desired_path: "MainMenu",
        transitionEnded: false
    }))

   const renderer = await (ReactThreeTestRenderer.create(<FadingTextModel {...{useStore}} textModelMenu="MainMenu"/>));
   const rowLen = renderer.scene.findAllByProps((node)=>node.props.curveSegments === 12).length;
   expect(rowLen).toBe(6);
});