import React from 'react';
import { HiOutlineInbox } from 'react-icons/hi';

const ReturnOrders = () => {
  // Placeholder return orders data
  const returnOrders = []; // Empty for now

  return (
    <div className=" py-2rem sm:px-[4rem]  py-16">
      <h1 className="text-2xl font-semibold mb-6 dark:bg-darkBg dark:text-darkText">Return Orders</h1>

      {returnOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16 bg-gray-50 rounded-lg shadow-inner dark:bg-darkcard dark:text-darkText">
          <HiOutlineInbox className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg font-medium">No Return Orders Found</p>
          <p className="text-gray-500 text-sm mt-1">
            You haven't requested any returns yet.
          </p>
        </div>
      ) : (
        <div>
          {/* Map through returnOrders when data is available */}
        </div>
      )}
    </div>
  );
};

export default ReturnOrders;
