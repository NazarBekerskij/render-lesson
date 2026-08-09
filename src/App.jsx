import './App.css'
import clsx from 'clsx';
import products from './products.json'

import List from './components/List/List'

function App() {

  return (
    <>
    
   <List products={products}/>

    </>
  )
}

export default App
