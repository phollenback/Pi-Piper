import InitialLogin from "./components/InitialLogin/InitialLogin";
import RestaurantDecal from "./components/InitialLogin/RestaurantDecal";

export default function Home() {
  

  return (
    <div className="flex flex-col">
      <RestaurantDecal />
      <InitialLogin />
    </div>
  );
}