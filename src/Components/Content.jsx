import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import products from "../products/products.js";

const Content = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "center",
      }}
    >
      {products.map((product) => {
        return (
          <Box key={product.id}>
            <Paper elevation={5}>
              <img
                src={product.img}
                alt={product.name}
                width={143}
                height={140}
              />
              <p className="name">{product.name}</p>
              <p className="price">R$ {product.price}</p>
              <button className="buyBtn">Comprar</button>
            </Paper>
          </Box>
        );
      })}
    </Container>
  );
};

export default Content;
