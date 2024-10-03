"use client"

import RootLayout from "../components/layout/layout";
import Resume from "../components/sections/landingPage/resume";
import { useState, useEffect } from "react";
import MethodNavbar from "./components/methodnavbar";
import EnfoqueTerapeutico from "./components/enfoqueterapeutico";
import Enfoque from "./components/enfoque";
import TerapiaIndividual from "./components/terapia-individual";
import Workshops from "./components/workshops"; 

export default function Method() {
    const [selectedSection, setSelectedSection] = useState<string>("");

    useEffect(() => {
        setSelectedSection("enfoque-terapeutico");
    }, []);
  return (
    <RootLayout>
      <div className="flex">
        <Resume />
        <div className="w-2/3">
            <MethodNavbar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            {selectedSection === "enfoque-terapeutico" && <EnfoqueTerapeutico />}
            {selectedSection === "enfoque" && <Enfoque />}
            {selectedSection === "terapia-individual" && <TerapiaIndividual />}
            {selectedSection === "workshops-relacionales" && <Workshops />}
        </div>
      </div>
    </RootLayout>
  );
}
