import { Link } from "react-router-dom";

function CartOverview() {
  return (
    //En md remarque le text est plus grand et en sm je rajoute du padding sur les cotés
    <div className="bg-stone-800 px-4 py-4 text-stone-200 uppercase text-sm md:text-base sm:px-6 flex justify-between items-center" >
       {/* augemente lespace entre les lettre à 2 quand je suis en petit ecrans 640px */}
      <p className="space-x-4 text-stone-300 font-semibold sm:space-x-6 " >
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
  
    <Link  className="" to="/cart" >Open cart &rarr;</Link>
   
    </div>
  );
}

export default CartOverview;
