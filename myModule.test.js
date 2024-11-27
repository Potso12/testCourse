import add from './src/add.js'
import drop from './src/drop.js'
import divide from './src/divide.js'
import words from './src/words.js'
import upperFirst from './src/upperFirst.js'
import get from './src/get.js'
import isDate from './src/isDate.js'
import reduce from './src/reduce.js'
import filter from './src/filter.js'
import map from './src/map.js'



describe('add', () => {
  it('should add two numbers correctly', () => {
    const result = add(1, 2)
    expect(result).toBe(3);
  });

  it('should drop 3 first element', () => {
    const result = drop([0, 2, 5, 7], 3)
    console.log(result)
    expect(result).toEqual([7]);
  });

  it('should calculate the quotient correctly', () => {
    const result = divide(6, 3)
    expect(result).toBe(2);
  });

  it('should convert first word into uppercase', () => {
    const result = upperFirst("moi")
    expect(result).toBe("Moi");
  });

  it('should give the value of the field I want', () => {
    const result = get({name: "Maito", price: 2}, ['price'])
    expect(result).toBe(2);
  });

  it('should split the string into array of words', () => {
    const result = words("Moi minä olen ammattitestaaja")
    expect(result).toEqual(["Moi", "minä", "olen", "ammattitestaaja"]);
  });

  it('checks weather is date objeckt', () => {
    const date1 = isDate(new Date)
    const date2 = isDate("24 5 2005")
    expect(date1).toBe(true);
    expect(date2).toBe(false);
  });

  it('should add two numbers correctly', () => {
    const getSum = (total, num) => {
      return total + Math.round(num.price);
    }

    const products = { name: "product 1", price: 2,
      name: "product 1", price: 2,
      name: "product 2", price: 10,
      name: "product 3", price: 54,
      name: "product 4", price: 3.5,
    }

    const result = reduce(products, getSum, 0)
    expect(result).toBe(71.5);
  });

  it('should filter products according to the function', () => {
    const products = [ { name: "product 1", price: 2 },
      { name: "product 1", price: 2},
      { name: "product 2", price: 10},
      { name: "product 3", price: 54},
      { name: "product 4", price: 3.5},
    ]

    const result = filter(products, ({ price }) => price > 10 )
    expect(result).toEqual([{ name: "product 3", price: 54}]);
  });

  it('should add two numbers correctly', () => {
    const makeElement = (product) => {
      return <p>{product.name}</p>;
    }


    const products = [ { name: "product 1", price: 2 },
      { name: "product 1", price: 2},
      { name: "product 2", price: 10},
      { name: "product 3", price: 54},
      { name: "product 4", price: 3.5},
    ]
    const result = map(products, makeElement)
    expect(result).toEqual([
      <p>product 1</p>,
      <p>product 1</p>,
      <p>product 2</p>,
      <p>product 3</p>,
      <p>product 4</p>
    ]);  
  });
});