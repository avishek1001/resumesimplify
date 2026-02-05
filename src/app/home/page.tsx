"use client"
import { useState } from "react"
import Tab from "./_components/Tab"
import BasicDetails from "./_components/BasicDetails";

export default function Home() {
    const [steps, setSteps] = useState<string[]>(['BASIC DETAIL', 'INTRODUCTION', 'EDUCATION', 'WORK EXPERIENCE', 'PROJECTS', 'PRINT RESUME', 'CREDIT', 'DONATE']);
    const [activeStep, setActiveStep] = useState();
    const [form, setForm] = useState();

    return (
        <div className="grid grid-cols-3 grid-rows-[auto_1fr] font-[Inter] font-black h-screen">

            <div className="flex justify-end items-center border-b-8 col-span-3 h-16">
                <h1 className="w-full ml-3 font-[Gidugu] font-normal text-8xl">RESUME SIMPLIFY</h1>
                <div className="border-4 mr-3 h-10 w-48 flex items-center justify-center"><button className="w-full h-full">SAVED RESUME</button></div>
                <div className="border-4 rounded-full w-12 h-12 mr-3"></div>
            </div>

            <div className="border-6 m-3 ml-3 mr-1.5 pt-14">
                <h3 className="m-3 mb-6 text-center text-3xl">STEPS</h3>
                {
                    steps.map((m, i) => (
                        <Tab key={i} name={m}/>
                    ))
                }
            </div>
            <div className="border-6 m-3 ml-1.5 mr-1.5 pt-14">
                <BasicDetails />
            </div>
            <div className="border-6 m-3 ml-1.5 mr-3 pt-14">
                <h3>PREVIEW</h3>
            </div>
        </div>
    )
}