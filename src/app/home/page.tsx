"use client"
import React, { useState } from "react"
import Tab from "./_components/Tab"
import BasicDetails from "./_components/BasicDetails";
import TechStack from "./_components/TechStack";
import Education from "./_components/Education";

export default function Home() {
    // const [steps, setSteps] = useState<string[]>(['BASIC DETAIL', 'INTRODUCTION', 'EDUCATION', 'WORK EXPERIENCE', 'PROJECTS', 'PRINT RESUME', 'CREDIT', 'DONATE']);
    const steps: Array<string> = ['BASIC DETAIL', 'TECH STACK', 'EDUCATION', 'WORK EXPERIENCE', 'PROJECTS', 'PRINT RESUME', 'CREDIT', 'DONATE'];
    const [activeStep, setActiveStep] = useState<string>('BASIC DETAIL');
    // const [form, setForm] = useState<React.Component[]>([<BasicDetails />]);

    type stepComponentType = {
        [key: string]: React.ReactNode
    }
    const stepComponents: stepComponentType = {
        'BASIC DETAIL': <BasicDetails />,
        'TECH STACK': <TechStack />,
        'EDUCATION': <Education />
    }

    const onClickTab = (name: string) => {
        setActiveStep(name)
    }

    return (
        <div className="grid grid-cols-3 grid-rows-[auto_1fr] font-[Inter] font-black h-screen">

            {/* Navbar DIV */}
            <div className="flex justify-end items-center border-b-8 col-span-3 h-16">
                <h1 className="w-full ml-3 font-[Gidugu] font-normal text-8xl">RESUME SIMPLIFY</h1>
                <div className="border-4 mr-3 h-10 w-48 flex items-center justify-center"><button className="w-full h-full">SAVED RESUME</button></div>
                <div className="border-4 rounded-full w-12 h-12 mr-3"></div>
            </div>

            {/* Tab DIV */}
            <div className="border-6 m-3 ml-3 mr-1.5 pt-14">
                <h3 className="m-3 mb-6 text-center text-3xl">STEPS</h3>
                {
                    steps.map((m, i) => (
                        <Tab key={i} name={m} onClickTab={onClickTab} />
                    ))
                }
            </div>

            {/* Forms DIV */}
            <div className="border-6 m-3 ml-1.5 mr-1.5 pt-14">
                {
                    stepComponents[activeStep]
                }
            </div>

            {/* Preview DIV */}
            <div className="border-6 m-3 ml-1.5 mr-3 pt-14">
                <h3>PREVIEW</h3>
            </div>
        </div>
    )
}