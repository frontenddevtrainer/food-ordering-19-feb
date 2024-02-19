import connect from "@foodordering/lib/db/db";
import RestaurantModel from "@foodordering/lib/db/model/restaurant";
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
  const doc = await RestaurantModel.findById(id);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-orange-600">{doc?.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {doc?.menu &&
          doc.menu.length > 0 &&
          doc.menu.map((item) => {
            return (
              <div key={item.item} className="bg-white shadow rounded p-4">
                <h3 className="font-bold">{item.item}</h3>
                <p className="text-orange-500">{item.price}</p>
                <p className="text-orange-500">{item.description}</p>
                <AddToCart item={item.item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantsDetailPage;
