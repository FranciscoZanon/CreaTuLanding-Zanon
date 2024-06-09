import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ChakraProvider>
        <NavBar />
        <ItemListContainer title='Boca Store' />
      </ChakraProvider>
  )
}

export default App
