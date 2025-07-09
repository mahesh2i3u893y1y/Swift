export const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export const fetchComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  return res.json();
};
