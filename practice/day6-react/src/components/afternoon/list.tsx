import React, { useEffect } from 'react'
import Update from '../afternoon/update'
import Delete from '../afternoon/delete'


const url = 'https://server.aptech.io/online-shop/customers';
type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    birthday: string;
    // Add other fields if needed
};
type Props = {
    reload?: number;

}

export default function list({ reload = 0 }: Props) {
    const [selectedCustomer, setSelectedCustomer] = React.useState<Customer | null>(null);
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch customers');
                }
                const data = await response.json();
                setCustomers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        }
        fetchCustomers();
    }, [reload]);
    const handleOnSelect = (customner: any) => {
        setSelectedCustomer(customner);
    }
    const handleOnUpdated = (customer: any) => {
        setCustomers((prev) => prev.map((c: any) => (c.id === customer.id ? customer : c)));
        // Close the update form after updating
        setSelectedCustomer(null);
      };
    return (
      <div className="container mx-auto my-6 overflow-x-auto">
  <div className="bg-white shadow rounded-lg">
    <table className="min-w-full text-sm">
      {/* HEADER */}
      <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider px-4 py-3 border-b text-left">
        <tr>
          {['ID', 'Name', 'Email', 'Phone', 'Address', 'Birthday', 'Actions']
            .map((th) => (
              <th key={th} className="px-4 py-3 border-b border-gray-200 text-center  first:text-right">
                {th}
              </th>
          ))}
        </tr>
      </thead>

      {/* BODY */}
      <tbody>
        {customers.map((c) => (
          <tr
            key={c.id}
            className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition-colors"
          >
            <td className="px-4 py-3 text-right font-medium">{c.id}</td>
            <td className="px-4 py-3  ">{`${c.firstName} ${c.lastName}`}</td>
            <td className="px-4 py-3">{c.email}</td>
            <td className="px-4 py-3">{c.phoneNumber}</td>
            <td className="px-4 py-3 whitespace-nowrap">{c.address}</td>
            <td className="px-4 py-3 whitespace-nowrap">{c.birthday}</td>
            <td className="px-4 py-3">
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleOnSelect(c)}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded"
                >
                  Edit
                </button>
                <Delete
                  customerId={c.id}
                  onDeleted={(id) =>
                    setCustomers((prev) => prev.filter((u) => u.id !== id))
                  }
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {selectedCustomer && (
    <Update
      customerId={selectedCustomer.id}
      onUpdated={handleOnUpdated}
      onClose={() => setSelectedCustomer(null)}
    />
  )}
</div>

    )
}