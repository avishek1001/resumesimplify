export default function Education() {
    return (
        <div className="m-3">
            <label htmlFor="college" className="block mb-3 text-3xl">COLLEGE NAME</label>
            <input type="text" className="border w-full h-10 mb-3" id="college" />

            <div className="flex justify-between mb-3">
                <label htmlFor="collegePassout" className="block text-3xl">PASSOUT YEAR</label>
                <input type="number" id="collegePassout"
                    className="block border h-10"
                />
            </div>

            <div className="flex justify-between mb-3">
                <label htmlFor="collegeResult" className="block text-3xl">PERCENTAGE / CGPA</label>
                <input type="number" id="collegeResult"
                    className="block border h-10"
                />
            </div>

            <label htmlFor="school" className="block mt-20 mb-3 text-3xl">SCHOOL NAME</label>
            <input type="text" className="border w-full h-10 mb-3" id="school" />

            <div className="flex justify-between mb-3">
                <label htmlFor="schoolPassout" className="block text-3xl">PASSOUT YEAR</label>
                <input type="number" id="schoolPassout"
                    className="block border h-10"
                />
            </div>

            <div className="flex justify-between mb-3">
                <label htmlFor="schoolResult" className="block text-3xl">PERCENTAGE / CGPA</label>
                <input type="number" id="schoolResult"
                    className="block border h-10"
                />
            </div>


        </div>
    )
}