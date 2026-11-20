const car = {
  brand: "Tesla",
  color: "White",
  get carBrand() {
    return this.brand.toUpperCase();
  },
  set carBrand(newBrand) {
    this.brand = newBrand;
  },
};

console.log(car.carBrand);

let newCarBrand = "Toyota"; //String 

console.log(newCarBrand);

console.log(newCarBrand.toUpperCase());
