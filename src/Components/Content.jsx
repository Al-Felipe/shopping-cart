import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import products from "../products/products.js";

const Content = () => {
  return (
    <Container>
      {products.map((product) => {
        return (
          <Box key={product.id}>
            <Paper elevation={3}>
              <img
                src={product.img}
                alt={product.name}
                width={100}
                height={100}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button className="buyBtn">Comprar</button>
            </Paper>
          </Box>
        );
      })}
    </Container>
  );
};

export default Content;
