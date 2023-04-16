import React, { useState, useRef } from 'react'
import { random } from 'maath'

import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei';

export type Type = 'stars'

export interface ISceneType {
    sceneType?: Type
    props?: any
}

export const SceneComponent: React.FC<ISceneType> = ({ sceneType, props }) => {
    const ref = useRef<any>()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000)));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }

    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {
                sceneType === 'stars' && (
                    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
                    </Points>
                )
            }
        </group>
    )
}