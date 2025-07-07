import React from 'react';
import List from '../afternoon/list';
import Create from '../afternoon/create';

export default function Customers() {
  const [reload, setReload] = React.useState(0);

  const handleOnCreated = (customer: any) => {
    console.log('Customer created:', customer);
    // You can add logic here to refresh the list or show a success message
    setReload((prev) => prev + 1);
  };
  return (
    <div>
      <Create onCreated={handleOnCreated} />
      <List reload={reload} />
    </div>
  );
}