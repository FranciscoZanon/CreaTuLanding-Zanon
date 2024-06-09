import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
const CartWidget = () => {
  return (
    <Box mr={4}>
      <FaShoppingCart size={24}/>
    </Box>
  );
};

export default CartWidget;
