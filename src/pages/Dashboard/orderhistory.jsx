import React, { useState, useMemo } from 'react';
import { Search, Eye, Calendar, Package, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const OrderHistory = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample order data based on your image
  const orders = [
    {
      id: '#RC000125',
      placedOn: '04 Sep, 2025 01:00 PM',
      qty: 1,
      amount: 1070.00,
      status: 'Pending'
    },
    {
      id: '#RC000124',
      placedOn: '27 Aug, 2025 11:34 AM',
      qty: 1,
      amount: 30.50,
      status: 'Pending'
    },
    {
      id: '#RC000123',
      placedOn: '27 Aug, 2025 11:34 AM',
      qty: 1,
      amount: 33.65,
      status: 'Pending'
    },
    {
      id: '#RC000122',
      placedOn: '27 Aug, 2025 11:33 AM',
      qty: 1,
      amount: 83.00,
      status: 'Pending'
    },
    {
      id: '#RC000121',
      placedOn: '27 Aug, 2025 11:32 AM',
      qty: 1,
      amount: 354.95,
      status: 'Pending'
    },
    {
      id: '#RC000120',
      placedOn: '27 Aug, 2025 11:32 AM',
      qty: 1,
      amount: 147.05,
      status: 'Pending'
    },
    {
      id: '#RC000119',
      placedOn: '27 Aug, 2025 11:31 AM',
      qty: 1,
      amount: 1910.00,
      status: 'Pending'
    },
    {
      id: '#RC000118',
      placedOn: '27 Aug, 2025 11:31 AM',
      qty: 1,
      amount: 354.95,
      status: 'Pending'
    },
    // Additional sample orders for other statuses
    {
      id: '#RC000117',
      placedOn: '26 Aug, 2025 10:15 AM',
      qty: 2,
      amount: 245.80,
      status: 'Delivered'
    },
    {
      id: '#RC000116',
      placedOn: '25 Aug, 2025 02:30 PM',
      qty: 1,
      amount: 89.99,
      status: 'On The Way'
    },
    {
      id: '#RC000115',
      placedOn: '24 Aug, 2025 09:45 AM',
      qty: 3,
      amount: 125.75,
      status: 'Processing'
    },
    {
      id: '#RC000114',
      placedOn: '23 Aug, 2025 04:20 PM',
      qty: 1,
      amount: 67.50,
      status: 'Cancelled'
    }
  ];

  const statusConfig = {
    'Pending': { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: Clock },
    'Confirm': { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: CheckCircle },
    'Pickup': { color: 'bg-purple-100 text-purple-800 border-purple-200', icon: Package },
    'Processing': { color: 'bg-orange-100 text-orange-800 border-orange-200', icon: Package },
    'On The Way': { color: 'bg-indigo-100 text-indigo-800 border-indigo-200', icon: Truck },
    'Delivered': { color: 'bg-green-100 text-green-800 border-green-200', icon: CheckCircle },
    'Cancelled': { color: 'bg-red-100 text-red-800 border-red-200', icon: XCircle }
  };

  const filterTabs = [
    { name: 'Pending', count: orders.filter(o => o.status === 'Pending').length },
    { name: 'Confirm', count: orders.filter(o => o.status === 'Confirm').length },
    { name: 'Pickup', count: orders.filter(o => o.status === 'Pickup').length },
    { name: 'Processing', count: orders.filter(o => o.status === 'Processing').length },
    { name: 'On The Way', count: orders.filter(o => o.status === 'On The Way').length },
    { name: 'Delivered', count: orders.filter(o => o.status === 'Delivered').length },
    { name: 'Cancelled', count: orders.filter(o => o.status === 'Cancelled').length },
    { name: 'All', count: orders.length }
  ];

  const filteredOrders = useMemo(() => {
    let filtered = orders;
    
    if (activeFilter !== 'All') {
      filtered = filtered.filter(order => order.status === activeFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeFilter, searchQuery, orders]);

  const StatusIcon = ({ status }) => {
    const IconComponent = statusConfig[status]?.icon || Clock;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-darkBg dark:text-darkText">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:bg-darkBg dark:text-darkText">Order History</h1>
          <p className="text-gray-600 dark:bg-darkBg dark:text-darkText">Track and manage all your orders</p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div> */}

        {/* Filter Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveFilter(tab.name)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeFilter === tab.name
                    ? tab.name === 'Pending'
                      ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                      : 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No orders found</p>
              <p className="text-gray-400 dark:bg-darkBg dark:text-darkText">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
             {filteredOrders.map((order) => (
  <div
    key={order.id}
    className="p-4 hover:bg-gray-50 transition-colors border-b last:border-none dark:bg-darkcard dark:text-darkText"
  >
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 ">

      {/* LEFT: Order ID + Date */}
      <div className="flex-1">
        <h3 className="text-base font-semibold text-blue-600">
          Order ID {order.id}
        </h3>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-1" />
          Placed on {order.placedOn}
        </div>
      </div>

      {/* STATUS (right on desktop, top-right on mobile) */}
      <div className="lg:order-none order-1 self-start lg:self-center">
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
            statusConfig[order.status]?.color ||
            "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          <StatusIcon status={order.status} />
          <span className="ml-1">{order.status}</span>
        </div>
      </div>

      {/* QTY + AMOUNT */}
      <div className="flex gap-6 lg:justify-center lg:flex-none text-sm">
        <div>
          <span className="text-gray-600">QTY: </span>
          <span className="font-medium">{order.qty}</span>
        </div>
        <div>
          <span className="text-gray-600">Amount: </span>
          <span className="font-bold text-lg">${order.amount.toFixed(2)}</span>
        </div>
      </div>

      {/* VIEW DETAILS BUTTON */}
      <div className="lg:flex-none">
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors w-full lg:w-auto justify-center">
          <Eye className="w-4 h-4 mr-1" />
          
          <NavLink to="/orderdetail">
            View Details
          </NavLink>
        </button>
      </div>
    </div>
  </div>
))}

            </div>
          )}
        </div>

        {/* Pagination could be added here */}
        {filteredOrders.length > 10 && (
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-gray-600">Page 1 of 1</span>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;