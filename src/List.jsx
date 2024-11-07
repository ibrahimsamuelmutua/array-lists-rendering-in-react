
import propTypes from 'prop-types'

function List(props){



  const itemList = props.items
  const category = props.category
  
  //itemList.sort((a,b)=> a.calories - b.calories)
  itemList.sort((a,b) => a.name.localeCompare(b.name))
  
  //const highCalFruits = fruits.filter(fruit => fruit.calories <=50)

  const listItems =itemList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.calories} </li>)
  
  return(
    <>
    <h3 className="item-category">{category}</h3>
    <ul className="item-list">{listItems}</ul>
    </>
  )
}

List.propTypes ={
  category: propTypes.string,
  items:propTypes.arrayOf(propTypes.shape({id:propTypes.number,
                                           name:propTypes.string,
                                          calories:propTypes.number})),
}

List.defaultProps ={
  items: [],
  category: "category" ,

}



export default List;