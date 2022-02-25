// // import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Rating from "../Components/Rating";
// // import products from "../products";

// const ProductScreen = ({ match }) => {
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data } = await axios.get(`/api/products/${match.params.id}`);
//       setProduct(data);
//     };
//     fetchProduct();
//   }, [match]);

//   // const product = products.find((p) => p._id === match.params.id);

//   return (
//     <>
//       <Link className="btn btn-light my-3" to="/">
//         Go Back
//       </Link>
//       <Row>
//         <Col md={6}>
//           <Image src={product.image} alt={product.name} fluid />
//         </Col>
//         <Col md={3}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h3>{product.name} </h3>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Rating
//                 value={product.rating}
//                 text={`${product.numReviews} reviews`}
//               />
//             </ListGroup.Item>
//             <ListGroup.Item>price: ${product.price}</ListGroup.Item>
//             <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <Card>
//             <ListGroup variant="flush">
//               <Row>
//                 <Col>Price</Col>
//                 <Col>
//                   <strong> ${product.price} </strong>
//                 </Col>
//               </Row>
//             </ListGroup>
//             <ListGroup variant="flush">
//               <Row>
//                 <Col>Status:</Col>
//                 <Col>
//                   {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
//                 </Col>
//               </Row>
//             </ListGroup>
//             <ListGroup.Item>
//               <Button
//                 className="btn-block"
//                 type="button"
//                 disabled={product.countInStock === 0}
//               >
//                 Add To Cart
//               </Button>
//             </ListGroup.Item>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default ProductScreen;

// NODE_ENV = development
// PORT = 5000

// MONGO_URI = mongodb+srv:munachiso1:munachiso1@munachiso.ady6z.mongodb.net/proshop?retryWrites=true&w=majority

// JWT_SECRET = abc123

// PAYPAL_CLIENT_ID =
// ATvasNZ3lWWNzj7T3wYUokh7HHNihlPpyl4dde_8O9LooWlPOkZ4L8uXpyhKG8pk89YK5KBGivQQTspn

// "client": "npm start --prefix proshop-front-end",//

// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix proshop-front-end && npm run build --prefix proshop-front-end"
