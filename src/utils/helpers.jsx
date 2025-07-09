

// a - firstString 
// b - Second string
// order - Sorting direction: 1 for ascending, -1 for descending
//  Comparison result for sorting  it return number


const compareStrings = (a, b, order) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return order;
  if (a < b) return -order;
  return 0;  // if equals
};



export const sortByName = (data, order) => {
  return [...data].sort((a, b) => compareStrings(a.name, b.name, order));
};

export const sortByEmail = (data, order) => {
  return [...data].sort((a, b) => compareStrings(a.email, b.email, order));
};

export const sortByPostId = (data, order) => {
  return [...data].sort((a, b) => (a.postId - b.postId) * order);
};


export const filterBySearchTerm = (data, searchTerm) => {
  const lowerTerm = searchTerm.toLowerCase();

  return data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(lowerTerm);
    const emailMatch = item.email.toLowerCase().includes(lowerTerm);
    const commentMatch = item.body.toLowerCase().includes(lowerTerm);

    return nameMatch || emailMatch || commentMatch;
  });
};

