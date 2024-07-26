import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TypewriterEffectSmooth } from './ui/TypewriterEffect';
import MagicButton from './ui/MagicButton';
import { BsPersonWorkspace } from 'react-icons/bs';
import ShootingStars from './ui/ShootingStars';
import { socialMedia } from '@/data';
import { LinkPreview } from './ui/LinkPreview';

const Hero = () => {

    const words = [
        {
          text: "Hi,",
        },
        {
          text: "I'm",
        },
        {
          text: "Kaushik",
          className: "text-purple dark:text-purple"
        },
        {
          text: "Manivannan.",
          className: "text-purple dark:text-purple"
        },
    ];

    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            <div>
            <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <ShootingStars />
            </div>
            <div className="flex justify-center relative mt-20 mb-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Made with Next.js
                    </h2>

                    <TypewriterEffectSmooth 
                        words={words}
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider text-sm md:text-xl lg:text-2xl mb-5 md:mb-0 font-bold">
                        A Full-Stack AI Software Engineer based in Boston, MA.
                    </p>

                    <a href="#projects">
                        <MagicButton
                            title="View my Projects"
                            icon={<BsPersonWorkspace />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
            <div className="flex justify-center items-center md:gap-3 gap-6 z-50">
            {socialMedia.map((profile) => (
                <LinkPreview url={profile.link} key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 z-50">
                    <img src={profile.img} alt="Kaushik Manivannan" width={20} height={20}
                    />
                </LinkPreview>
            ))}
            </div>
        </div>
    )
}

export default Hero