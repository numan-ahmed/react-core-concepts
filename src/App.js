import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

const nayoks = ['Anwar', 'Jafor', 'Alamgir','Salman', 'Jafor', 'Alamgir','Salman']
const products =[
  {name:'Photoshop',price:'$99.99'},
  {name:'Illustrator',price:'$70.99'},
  {name:'antivirus',price:'$40.00'},
  {name:'premiere',price:'$50.99'},
  {name:'watch',price:'$50.99'},
];

// const productName = products.map(product => product.name);
// console.log(productName);
// const naokName =  nayoks.map(nayok => nayok);
// console.log(naokName);
return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>

        <Users></Users>

      <Counter></Counter>
        <ul>
         {
           nayoks.map(nayok => <li> {nayok} </li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
        </ul>
            {
              products.map(product => <Product product={product}></Product>)
              
            }
{/* 
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        <Person name={nayoks[0]} job='Footballer'></Person>
        <Person name={nayoks[1]} job='Police'></Person>
      </header>
    </div>
  );
}
function Users() {
  const [users,setUsers] = useState([])

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
  },[]);
  
  return(
    <div>
      <h2> Dynamic Users {users.length}</h2>
      <ul>
        {/* {
          console.log(users)
        } */}
        {
          users.map(user => <li>{user.name} , {user.email} ,{user.phone}</li>)
        }
        
      </ul>
    </div>
     
  )
  
}




function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius:'8px',
    width:'300px',
    height:'200px',
    float:'left',
    color:'black',
    background:'lightgray',
    margin:'5px',
    padding: '10px',
  }
const {name,price} = props.product;
// console.log(name,price);


  return (
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h5> Price:{price}</h5>
      <button>Buy now</button>

    </div>
  )
  
}

function Person(props) {
  return (
    <div style={{background:'gray',borderRadius:'10px',border:'2px solid gold',width:'300px',margin:'10px'}}>
      <h3> My Name:{props.name} </h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
  
}

function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
   {
    // const newCount = count + 2;
    // setCount(newCount);
  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={ () => setCount(count + 1)}>Decrease</button>
      <button onClick={ () => setCount(count - 1)}>Increase</button>
    </div>
  )
  
}


export default App;
