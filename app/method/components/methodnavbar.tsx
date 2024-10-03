export default function MethodNavbar({ selectedSection, setSelectedSection }: { selectedSection: string, setSelectedSection: (section: string) => void }) {
    return (
        <div className="mt-40 w-2/3 min-w-full pr-10 pl-10">
            <ul className="flex justify-between items-center px-4 w-full">
                <li className="flex-1 text-center">
                    <a 
                        onClick={() => setSelectedSection("enfoque-terapeutico")} 
                        className={`block w-full cursor-pointer ${selectedSection === "enfoque-terapeutico" ? "font-bold" : ""}`}
                    >
                        Enfoque Terapéutico
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a 
                        onClick={() => setSelectedSection("enfoque")} 
                        className={`block w-full cursor-pointer ${selectedSection === "enfoque" ? "font-bold" : ""}`}
                    >
                        Enfoque
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a 
                        onClick={() => setSelectedSection("terapia-individual")} 
                        className={`block w-full cursor-pointer ${selectedSection === "terapia-individual" ? "font-bold" : ""}`}
                    >
                        Terapia Individual
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a 
                        onClick={() => setSelectedSection("workshops-relacionales")} 
                        className={`block w-full cursor-pointer ${selectedSection === "workshops-relacionales" ? "font-bold" : ""}`}
                    >
                        Workshops Relacionales
                    </a>
                </li>
            </ul>
        </div>
    )
}