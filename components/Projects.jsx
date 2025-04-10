import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CrescentAcademy from '../public/assets/projects/Crescent-Academy/ca-coverphoto.png'
import LegoStore from '../public/assets/projects/Lego-Store/ls-coverphoto.png'
import SpotifyForBroke from '../public/assets/projects/Spotify-For-Broke/sfb-coverphoto.png'
import ProjectItems from '../components/ProjectItems';


const Projects = () => {
    return(
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    
                        <ProjectItems
                            title='Crescent-Academy'
                            backgroundImg={CrescentAcademy}
                            projectURL={'/'}
                        />

                        <ProjectItems
                            title='Lego-Store'
                            backgroundImg={LegoStore}
                            projectURL={'/'}
                        />

                        <ProjectItems
                            title='Spotify-For-Broke'
                            backgroundImg={SpotifyForBroke}
                            projectURL={'/'}
                        />
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;