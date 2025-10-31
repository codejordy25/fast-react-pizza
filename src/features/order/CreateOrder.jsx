// import { useState } from "react";

import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
console.log(isValidPhone("+1 (234) 567-8901")); // true
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>

      {/* <form method="POST" action="order/new">  C'est pas nécessaire
      parcequ'il va react Routeur va l'associé à l'action*/}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // Convertir en objet..
  console.log("Form data:", data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart), // Convertir le cart de string en objet
    priority: data.priority === "on", // Convertir le champ checkbox en booléen
  };
  console.log("Order to create:", order);

  //Await parceque dans l'api il renvoie un objet(promesse), c'est que nous allons utiliser dans la route
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

// Pour finir je dois connecter l'action à la route dans App.jsx

export default CreateOrder;
