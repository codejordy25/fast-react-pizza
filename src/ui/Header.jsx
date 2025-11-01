import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div>
      <header className="border-b-2 border-stone-300 px-4 py-3 bg-yellow-500 uppercase sm:px-6" >
        <Link className="tracking-widest" to="/">Fast React Pizza Co.</Link>
        <SearchOrder />
         <Username/> 
      </header>
    </div>
  );
}

export default Header;
