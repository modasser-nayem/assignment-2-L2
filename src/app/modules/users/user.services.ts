const getAllUsers = () => {
  const users = [
    { _id: 1, name: 'Nayem', age: 21 },
    { _id: 1, name: 'Sayem', age: 23 },
    { _id: 1, name: 'Rakib', age: 21 },
    { _id: 1, name: 'Raju', age: 14 },
    { _id: 1, name: 'Bablu', age: 27 },
  ];
  return users;
};

export const userServices = { getAllUsers };
