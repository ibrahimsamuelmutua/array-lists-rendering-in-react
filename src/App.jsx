import List from './List.jsx'

function App() {

  const fruits = [{id:1,name:"mango", calories:20},
  {id:2,name:"apple",calories:45},
  {id:3,name:"banana",calories:67},
   {id:4,name:"watermelon", calories:89}]


  const vegetables =[
    {id:1, name:"tomato", calories:12},
    {id:2, name:"onion", calories:25},
    {id:3, name:"carrot",calories:12},
    {id:4, name:"brocoli", caloories:35},

  ]


  return (
    <>
    {fruits.length >0 ? <List items ={fruits} category = "fruits"/>:null}
    {vegetables.length >0 ? <List items ={vegetables} category = "vegetables"/>:null }
    </>


  )
}

export default App
