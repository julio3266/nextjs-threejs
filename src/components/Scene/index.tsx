"use client";
import { Canvas } from '@react-three/fiber';
import { SceneComponent } from '../StarsComponent';

export interface IScene {

}

export const Scene: React.FC<IScene> = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1] }} >
            <SceneComponent sceneType='stars' />
        </Canvas>
    )
}