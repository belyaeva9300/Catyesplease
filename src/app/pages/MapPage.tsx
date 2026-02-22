import { Header } from "../components/Header";
import imgBasemapImage from "figma:asset/07185825a6a72a3f22c15d6fdcee2bfb6009d8c3.png";

export default function MapPage() {
  return (
    <div className="bg-white relative min-h-screen overflow-hidden">
      <div className="absolute left-[-1089px] size-[2850px] top-[-260px]" data-name="Basemap image">
        <img alt="" className="max-w-none object-contain size-full" src={imgBasemapImage} />
      </div>
      <div className="relative z-10">
        <Header />
      </div>
    </div>
  );
}
