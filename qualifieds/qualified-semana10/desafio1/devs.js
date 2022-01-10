let devs = [
   { first_name: 'Noah', last_name: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
   { first_name: 'Maia', last_name: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
   { first_name: 'Mariane', last_name: 'A.', country: 'Brazil', continent: 'Soth America', age: 29, language: 'JavaScript' },
   { first_name: 'Shufen', last_name: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
     { first_name: 'Alexandra', last_name: 'Z.', country: 'Brazil', continent: 'Soth America', age: 29, language: 'Java' },
   { first_name: 'Sumayah', last_name: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
   { first_name: 'Cesar', last_name: 'M.', country: 'Brazil', continent: 'Soth America', age: 23, language: 'JavaScript' }
 ]

 const devsBR = (devsArr) => {
   let newArray = []
   devsArr.filter(dev => {
      dev.country == "Brazil" && dev.language == "JavaScript" ? newArray.push(dev) : false;
   })
   return newArray
}

console.log(devsBR(devs))