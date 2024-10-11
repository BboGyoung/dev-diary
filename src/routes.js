import HomePage from "./pages/HomePage";
import DevMainPage from "./pages/DevPage/DevMainPage";
import FoodMainPage from "./pages/FoodPage/FoodMainPage";
import FoodCreatePage from "./pages/FoodPage/FoodCreatePage";
import FoodDetailPage from "./pages/FoodPage/FoodDetailPage";
import LogMainPage from "./pages/LogPage/LogMainPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/dev", component: DevMainPage },
  { path: "/food", component: FoodMainPage },
  { path: "/food/create", component: FoodCreatePage },
  { path: "/food/:id", component: FoodDetailPage },
  { path: "/log", component: LogMainPage },
];

export default routes;
