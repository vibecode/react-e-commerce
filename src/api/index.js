import phones from './mockPhones';
import R from 'ramda';

export const fetchPhones = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(phones);
    }, 800)
  })
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(phones);
    }, 800)
  })
};

//R.find
//Returns the first element of the list which matches the predicate, or undefined if no element matches.
//Dispatches to the find method of the second argument, if present.

//R.propEq
//Returns true if the specified object property is equal, in R.equals terms, to the given value; false otherwise.
export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
  })
};
