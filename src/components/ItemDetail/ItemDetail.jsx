import React from 'react'
import { Flex, Card, Image, CardBody, CardFooter, Heading, Stack, Button, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({product}) => {
    console.log(product)

    const OnAdd = (count) => {
        toast(`Agregaste ${count} productos al carrito`)
    }

  return (
    <Flex justify={'center'} align={'center'}>
    <Card maxW='sm' m={3} color={'blue'} backgroundColor={'#D2D0D0'}>
  <CardBody>
    <Image
      src={product.img}
      alt='Green double couch with wooden legs'
      w={'350px'}
      h={'350px'}
      objectFit={'cover'}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.nombre}</Heading>
      <Text>
        {product.descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${product.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <ItemCount initialValue={1} stock={product.stock} OnAdd={OnAdd}/>
    </ButtonGroup>
  </CardFooter>
  <ToastContainer />
</Card>
    </Flex>
  )
}

export default ItemDetail
