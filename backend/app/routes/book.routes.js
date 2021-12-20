/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : book routes for book url end points
 * @file            : book.router.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

const express = require("express");
const bookController = require("../controllers/book/book.controller");
const bookRoute = express.Router();
const bookMiddleware = require("../middleware/book.middleware.js");

// Adds the book to cart
bookRoute.post("/add-to-cart", bookMiddleware.ensureToken, bookController.addToCart)

// Adds the customer details
bookRoute.get("/cart",bookMiddleware.ensureToken, bookController.getCart)

// Adds the book to cart
bookRoute.post("/customer-details", bookMiddleware.ensureToken, bookController.addCustomerDetails)

// gets the customer details
bookRoute.get("/customer-details", bookMiddleware.ensureToken, bookController.getCustomerDetails)

// removes a all books from cart
bookRoute.delete("/cart", bookMiddleware.ensureToken, bookController.removeCart)

// removes a book from cart
bookRoute.delete("/cart/:id", bookMiddleware.ensureToken, bookController.deleteCartProduct)

// finds all book based on search key
bookRoute.post("/search", bookMiddleware.ensureToken, bookController.searchBook)

// finds all book based on page index
bookRoute.get("/:index/:sortId",bookMiddleware.ensureToken,bookController.findAll);

// adds a order detail to database
bookRoute.post("/create-order",bookMiddleware.ensureToken,bookController.createOrder);
   

module.exports = bookRoute;
