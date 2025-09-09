// src/pages/ShopDetails.jsx
import { useParams } from "react-router-dom";

const ShopDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop Details</h2>
      <p>Showing details for Shop ID: {id}</p>
      {/* You can fetch shop details via API using id */}
    </div>
  );
};

export default ShopDetails;
