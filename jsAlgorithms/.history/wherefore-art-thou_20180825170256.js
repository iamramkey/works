//todo: find objects matching with the properties in the second argument(needle object)

function whatIsInAName(list, needle) {
  return list.filter(obj => {
    return Object.keys(needle).every(prop => {
      return needle.hasOwnProperty(prop) && needle[prop] === obj[prop];
    });
  });
}

console.log(
  whatIsInAName(
    [
      {
        name: "rama",
        age: 28
      },
      {
        name: "sampat",
        age: 26
      },
      {
        name: "sri",
        age: 24
      }
    ],
    {
      age: 28
    }
  )
);
