//1

const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
  };
  

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`); 
  }
  

  //2

  function countProps(obj) {
    return Object.keys(obj).length; 
  }
  
  const user2 = {
    name: "david",
    age: 39,
    hobby: "yes",
    premium: true
  };
  
  console.log(countProps(user2)); 
  

  //3

  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (const [employee, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  const employees = {
    "John": 10,
    "Jane": 15,
    "Mark": 8
  };
  
  console.log(findBestEmployee(employees)); 
  

  //4

  function countTotalSalary(employees) {
    let totalSalary = 0;
    
   
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
    
    return totalSalary;
  }
  
  const salaries = {
    "4el": 1000,
    "womel": 1500,
    "men": 1200
  };
  
  console.log(countTotalSalary(salaries)); 
  

  //5

  function getAllPropValues(arr, prop) {
    return arr.map(obj => obj[prop]); 
  }
  
  const products = [
    { name: "Apple", price: 1, quantity: 5 },
    { name: "Banana", price: 2, quantity: 3 },
    { name: "Cherry", price: 3, quantity: 7 }
  ];
  
  console.log(getAllPropValues(products, "name")); 
  console.log(getAllPropValues(products, "price")); 
  

  //6

  function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0; 
  }
  
  const allProducts = [
    { name: "Apple", price: 1, quantity: 5 },
    { name: "Banana", price: 2, quantity: 3 },
    { name: "Cherry", price: 3, quantity: 7 }
  ];
  
  console.log(calculateTotalPrice(allProducts, "Apple")); 
  console.log(calculateTotalPrice(allProducts, "Banana")); 
  console.log(calculateTotalPrice(allProducts, "Cherry"));
  
  
  
  
  
  
  