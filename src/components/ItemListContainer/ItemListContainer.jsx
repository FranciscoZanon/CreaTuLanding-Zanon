import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CircularProgress, Box, Image } from "@chakra-ui/react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    const getData = async () => {
        const coleccion = collection(db, 'productos')

        const queryRef = !categoryId ?
        coleccion : query(coleccion, where('categoria', '==', categoryId))

        const response = await getDocs(queryRef)

        const products = response.docs.map((doc) =>{
          const newItem = {
            ...doc.data(),
            id: doc.id
          }
          return newItem
        })
        setProductos(products)
        setLoading(false)
    }
    getData()
}, [categoryId])
 console.log(productos)


  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      backgroundColor={"#F8FBDE"}
    >
      <Box width="100%">
      <Image 
          src="https://bocashop.vteximg.com.br/arquivos/ids/169086/BocaShop2022-LaDeBoca_BannerD%20(2).jpg?v=638053416006670000" 
          alt="Banner" 
          objectFit="cover" 
          width="100%" 
          height="auto" 
        />
      </Box>
      
      {
        loading ? 
      <CircularProgress isIndeterminate color='green.300' />
      :
      <ItemList productos={productos}/>
        }
    </Flex>
  );
};

export default ItemListContainer;
