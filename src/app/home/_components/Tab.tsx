type TabProps = {
    name: string
}

export default function Tab({name}: TabProps){
    return(
        <div className="flex items-center border font-[Inter] font-light text-2xl h-10 m-3 mb-12 hover:bg-[#B0CDAC]">
            <p className="ml-3">{name}</p>
        </div>
    )
}