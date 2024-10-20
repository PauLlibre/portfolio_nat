import RootLayout from "./components/layout/layout";
import MainView from "./components/sections/landingPage/mainview";

export default function Home() {
  return (
    <RootLayout>
      <div className="flex">
        <MainView />
      </div>
    </RootLayout>
  );
}
