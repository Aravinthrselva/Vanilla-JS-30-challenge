const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];




//1.  Array.prototype.filter()
//  Filter the list of inventors who were born in 1800s


const birthFilter = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year < 1900));
console.table(birthFilter);



//2. Array.prototype.map()
//Give us an array of the inventor first and last names

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);




//3.// Array.prototype.sort()
//Sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//4. Array.prototype.reduce()
// How many years did all the inventors live in total?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // total is initialised to 0

console.log(totalYears);


// 5. Array.prototype.sort()
// sort the inventors by years lived - young to old

const oldest = inventors.sort(function(a, b) {
  const lastInventorAge = a.passed - a.year;
  const nextInventorAge = b.passed - b.year;
  return lastInventorAge > nextInventorAge ? 1 : -1;
});

console.log(oldest);

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// 6. sort Exercise
// Sort the people alphabetically by last name
const nameOrder = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(nameOrder);

// 7. Reduce Exercise
// Sum up the instances of each element
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const transportation = data.reduce(function(obj, item) {

  if (!obj[item]) {
          obj[item] = 0;                            // initialising the item to 0
        }
        obj[item]++;
        return obj;
      }, {});                                      // starting with an empty object

    console.log(transportation);


      // 8.create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

      // const category = document.querySelector('.mw-category');
      // const links = Array.from(category.querySelectorAll('a'));   // converting nodelist into an array using Array.from() -- only arrays contain map() method
      // another way of converting nodelist into an array using a spread operator (...)👇
      // const links = [...category.querySelectorAll('a')];
      // const de = links
      //             .map(link => link.textContent)
      //             .filter(streetName => streetName.includes('de'));
