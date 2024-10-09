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
                        onClick={() => setSelectedSection("tecnicas")} 
                        className={`block w-full cursor-pointer ${selectedSection === "tecnicas" ? "font-bold" : ""}`}
                    >
                        Método y Tecnicas
                        {/* FOTO TRES CÍRCULOS Y DESCRIPCIÓN */}
                    </a>
                </li>
                <li className="flex-1 text-center">
                    <a 
                        onClick={() => setSelectedSection("enfoque")} 
                        className={`block w-full cursor-pointer ${selectedSection === "enfoque" ? "font-bold" : ""}`}
                    >
                        Servicios
                    </a>
                </li>
            </ul>
        </div>
    )
}