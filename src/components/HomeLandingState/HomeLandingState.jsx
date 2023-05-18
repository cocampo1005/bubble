import './HomeLandingState.scss';
import { HeroModel } from '../../components/HeroModel/HeroModel';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function HomeLandingState() {

    return (
        <div className='home-landing'>
            <section className='hero'>
                <article className='hero__article'>
                    <h1 className='hero__article-heading'>Blow them away with a portfolio that really POPS!</h1>
                    <p className='hero__article-para'>Manage and showcase your 3D work in a stylish and unique way. Join and start bubbling up your portfolio today!</p>
                    <Link className='hero__article-button-link' to={'/signup'}>
                        <motion.button
                            className='hero__article-button'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            JOIN NOW
                        </motion.button>
                    </Link>
                </article>
                <div className='hero__mesh'>
                    <Canvas colorManagement shadowMap>
                        <group>
                            <ambientLight intensity={0.4} color={'cyan'} />
                            <pointLight color={'magenta'} intensity={3} position={[10, 20, 10]} />
                            <pointLight color={'magenta'} intensity={3} position={[-10, -20, 10]} />
                        </group>
                        <Suspense>
                            <Float
                                speed={2} // Animation speed, defaults to 1
                                rotationIntensity={4} // XYZ rotation intensity, defaults to 1
                                floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                                floatingRange={[-2, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                            >
                                <HeroModel castShadow />
                                <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                            </Float>
                        </Suspense>
                    </Canvas>
                </div>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default HomeLandingState;