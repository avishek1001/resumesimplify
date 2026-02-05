type TabProps = {
    name: string,
    onClickTab: any
}

export default function Tab({ name, onClickTab }: TabProps) {
    return (
        <div
            className="flex items-center border font-[Inter] font-light text-2xl h-10 m-3 mb-12 hover:bg-[#B0CDAC]"
            
        >
            {/* <p className="ml-3 h-full w-full">{name}</p> */}
            <button
                className="ml-3 h-full w-full text-left"
                value={name}
                onClick={() => onClickTab(name)}
            >
                {name}
            </button>
        </div>
    )
}