import {parseOptionPrice} from './parseOptionPrice';

export const promoPrice = (cost, discount) => {
  let parsedCost = parseOptionPrice(cost);       //{type: "number", value: 51380.61}    //parsedCost.value = 51380.61

  const newPrice =  (parsedCost.value - (parsedCost.value * (discount/100))).toFixed(2);   //string

  const newPriceNum = Number(newPrice);    //number

  return newPriceNum;
};

