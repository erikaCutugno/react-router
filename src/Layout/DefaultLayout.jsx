import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <main className="container-lg">
        <Outlet />
      </main>
    </div>
  );
}
