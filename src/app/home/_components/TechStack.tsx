export default function TechStack() {
    return(
        <div className="m-3">
            <label htmlFor="skills" className="block mb-3 text-3xl">SKILLS</label>
            <textarea className="border w-full h-40 mb-3" name="" id="skills"></textarea>
            
            <label htmlFor="tools" className="block mb-3 text-3xl">TOOLS</label>
            <textarea className="border w-full h-40 mb-3" name="" id="tools"></textarea>
            
            <label htmlFor="certificates" className="block mb-3 text-3xl">CERTIFICATES</label>
            <textarea className="border w-full h-60 mb-3" name="" id="certificates"></textarea>
        </div>
    )
}