import CreateUser from "../features/user/CreateUser";
function Home() {
  return (
    <div className="my-10  sm:my-16 text-center " >
      {/* en md le texte est plus grand et en sm je rajoute du padding sur les cotés */}
      <h1 className="mb-8 text-xl font-semibold md:text-3xl px-4 " >
        The best pizza.
        <br />
        <span className="text-yellow-500">

        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
