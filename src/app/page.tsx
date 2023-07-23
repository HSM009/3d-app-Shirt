import Canvas from "./canvas/page";
import Customizer from "./pages/customizer";
import HomePage from "./pages/home";

export default function Home() {
  return (
    <main className=" bg-slate-400 app transition-all ease-in">
      <HomePage />
      <Canvas />
      <Customizer />
    </main>
  );
}
