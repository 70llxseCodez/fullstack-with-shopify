// import axios from "axios";
import bodyParser from "body-parser";
import Shopify from "shopify-api-node";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const shopify = new Shopify({
  shopName: "cpb-new-developer",
  accessToken: process.env.ACCESS_TOKEN,
});

const shopifyGraphQLQuery = `
  query {
    products(first: 10) {
      edges {
        node {
          id
          bodyHtml
          images(first: 1) {
            nodes {
              src
            }
          }
        }
      }
    }
  }
`;

var response = null;

app.get("/api/products", async (_, res) => {
  try {
    if (!response) {
      console.log("requested");
      response = await shopify.graphql(shopifyGraphQLQuery);
    }
    const { products } = response;
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${process.env.PORT}`);
  }
});

export { app };
