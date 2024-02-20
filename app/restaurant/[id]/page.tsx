import connect from "@foodordering/lib/db/db";
import {
  RestaurantModel,
  IRestaurantMenu,
} from "@foodordering/lib/db/model/restaurant";
import AddToCart from "./add-to-cart";

export interface IRestaurantsDetailPageProps {
  params: {
    id: string;
  };
}

const RestaurantsDetailPage: React.FC<IRestaurantsDetailPageProps> = async ({
  params,
}) => {
  const { id } = params;
  await connect();
  const doc = await RestaurantModel.findById(id).populate("menu").exec();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-orange-600">{doc?.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {doc?.menu &&
          doc.menu.length > 0 &&
          doc.menu.map((item) => {
            const newItem = { ...item.toObject() };
            newItem._id = item._id.toString();

            return (
              <div key={newItem._id} className="bg-white shadow rounded p-4">
                <h3 className="font-bold">{newItem.item}</h3>
                <p className="text-orange-500">{newItem.price}</p>
                <p className="text-orange-500">{newItem.description}</p>
                <AddToCart menu={newItem} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantsDetailPage;
