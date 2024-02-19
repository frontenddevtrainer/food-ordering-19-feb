import connect from "../db/db";

// RSC - React server component;
const RestaurantsPage = async () => {
  await connect();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-orange-600">Restaurants</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="font-bold text-orange-500">Restaurant Name</h3>
          <p>Description and/or special offers</p>
          <a
            href="/restaurant-details"
            className="text-orange-600 hover:underline"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
