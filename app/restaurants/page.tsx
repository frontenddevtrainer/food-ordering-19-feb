import connect from "../db/db";
import RestaurantModel from "../db/model/restaurant";

// RSC - React server component;
const RestaurantsPage = async () => {
  await connect();

  const docs = await RestaurantModel.find({});
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-orange-600">Restaurants</h2>

      <div className="grid grid-cols-3 gap-4">
        {docs &&
          docs.length > 0 &&
          docs.map((doc) => {
            return (
              <div className="bg-white shadow-md rounded p-4">
                <h3 className="font-bold text-orange-500">{doc.name}</h3>
                <p>{doc.location}</p>
                <a
                  href={`/restaurant/${doc._id}`}
                  className="text-orange-600 hover:underline"
                >
                  View Menu
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantsPage;
