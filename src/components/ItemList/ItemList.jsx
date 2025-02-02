import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
    console.log(productos)
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'}>
        {
            productos.map((prod) => (
                <Box key={prod.id}>
                    <Item {...prod} />
                </Box>
            ))
        }
    </Flex>
  )
}

export default ItemList