import axios from "axios";
export function getAllRecipesByCategory(category) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    }).then((res) => {
      console.log(res);
      resolve(res.data.meals);
    });
  });
}
export function getAllRecipesByCategories() {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    }).then((res) => {
      console.log(res);
      resolve(res.data.categories);
    });
  });
}
export function getMealDetail(mealId) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
    }).then((res) => {
      console.log(res);
      resolve(res?.data?.meals?.[0]);
    });
  });
}
export function getMealBySearchTerm(searchTerm) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`,
    }).then((res) => {
      console.log(res);
      resolve(res?.data?.meals);
    });
  });
}

 export function getMealsByFirstLetter(letter){
   return new Promise((resolve,reject)=>{
    axios({
      url: `www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
      method:'get'
    }).then(res=>{
      resolve(res?.data?.meals)
    })
  })

}
