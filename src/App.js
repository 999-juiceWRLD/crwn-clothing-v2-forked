import CategoryMenu from "./components/category-menu/CategoryMenu.component.jsx";
import { categories } from "./categories.js";

const App = () => {
  return (
    <CategoryMenu categories={categories}/>
  );
}

export default App;
