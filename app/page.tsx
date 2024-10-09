import Resume from "./components/sections/landingPage/resume";
import RootLayout from "./components/layout/layout";
import MainView from "./components/sections/landingPage/mainview";

export default function Home() {
  return (
    <RootLayout>
      <div className="flex ">
        {/* <Resume /> */}
        <MainView />
      </div>
    </RootLayout>
  );
}
