import LoginForm from "../components/InitialLogin/LoginForm";
import RestaurantDecal from "../components/InitialLogin/RestaurantDecal";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <RestaurantDecal />
        <LoginForm />
      </div>
    </div>
  );
}