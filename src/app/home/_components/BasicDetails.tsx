import './BasicDetails.css'

export default function BasicDetails(){
    return(
        <div className="m-3">
            <label htmlFor="name" className="block mb-3 text-3xl">NAME</label>
            <input type="text" id="name" className="border w-full h-10 mb-3" />

            <label htmlFor="email" className="block mb-3 text-3xl">E-MAIL</label>
            <input type="email" id="email" className="border w-full h-10 mb-3" />
            
            <label htmlFor="phone" className="block mb-3 text-3xl">PHONE</label>
            <input type="tel" inputMode="numeric" id="phone" className="border w-full h-10 mb-3" />
            
            <label htmlFor="linkedin" className="block mb-3 text-3xl">LINKEDIN</label>
            <input type="text" id="linkedin" className="border w-full h-10 mb-3" />
            
            <label htmlFor="github" className="block mb-3 text-3xl">GITHUB</label>
            <input type="text" id="github" className="border w-full h-10 mb-3" />

            <label htmlFor="summary" className="block mb-3 text-3xl">SUMMARY</label>
            <textarea className="border w-full h-64" name="" id="summary" placeholder="Write your summary..."></textarea>
        </div>
    )
}