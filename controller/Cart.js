// import CartModel from "../models/Cart.js";
// import ProductModel from "../models/Product.js";

// // Add Item to Cart
// export const addToCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // Check if the product is valid
//     const product = await ProductModel.findById(productId);
//     if (!product) {
//       return res.status(404).send({ message: "Product not found" });
//     }

//     // Check if the user already has a cart
//     let cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       // If no cart exists for the user, create a new cart
//       cart = new CartModel({
//         userId,
//         items: [{ productId, quantity }],
//       });
//     } else {
//       // Check if the product is already in the cart
//       const existingItem = cart.items.find(item => item.productId.toString() === productId);

//       if (existingItem) {
//         // If the product is in the cart, update the quantity
//         existingItem.quantity += quantity;
//       } else {
//         // Otherwise, add a new item to the cart
//         cart.items.push({ productId, quantity });
//       }
//     }

//     // Save the cart
//     await cart.save();

//     res.status(201).send({ message: "Product added to cart" });
//   } catch (error) {
//     console.log("Failed to add product to cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Update Cart Item
// export const updateCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // Find the cart for the user
//     const cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     // Find the item in the cart
//     const cartItem = cart.items.find(item => item.productId.toString() === productId);

//     if (!cartItem) {
//       return res.status(404).send({ message: "Item not found in cart" });
//     }

//     // Update the quantity of the product in the cart
//     cartItem.quantity = quantity;

//     // Save the updated cart
//     await cart.save();

//     res.status(200).send({ message: "Cart updated successfully" });
//   } catch (error) {
//     console.log("Failed to update cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Remove Item from Cart
// export const removeFromCart = async (req, res) => {
//   try {
//     const { userId, productId } = req.body;

//     // Find the cart for the user
//     const cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     // Remove the item from the cart
//     cart.items = cart.items.filter(item => item.productId.toString() !== productId);

//     // Save the updated cart
//     await cart.save();

//     res.status(200).send({ message: "Item removed from cart" });
//   } catch (error) {
//     console.log("Failed to remove item from cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Get Cart Details
// export const getCartDetails = async (req, res) => {
//   try {
//     const { userId } = req.query;

//     // Find the cart for the user and populate product details
//     const cart = await CartModel.findOne({ userId }).populate("items.productId");

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     res.status(200).send({ cart });
//   } catch (error) {
//     console.log("Failed to fetch cart details:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Clear Cart
// export const clearCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     // Find and remove the user's cart
//     const cart = await CartModel.findOneAndDelete({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     res.status(200).send({ message: "Cart cleared" });
//   } catch (error) {
//     console.log("Failed to clear cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };



// import CartModel from "../models/Cart.js";
// import ProductModel from "../models/Product.js";

// // Add Item to Cart
// export const addToCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // Check if the product is valid
//     const product = await ProductModel.findById(productId);
//     if (!product) {
//       return res.status(404).send({ message: "Product not found" });
//     }

//     // Check if the requested quantity is available
//     if (product.qty < quantity) {
//       return res.status(400).send({ message: "Insufficient stock" });
//     }

//     // Check if the user already has a cart
//     let cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       // If no cart exists for the user, create a new cart
//       cart = new CartModel({
//         userId,
//         items: [{ productId, quantity }],
//       });
//     } else {
//       // Check if the product is already in the cart
//       const existingItem = cart.items.find(item => item.productId.toString() === productId);

//       if (existingItem) {
//         // If the product is in the cart, update the quantity
//         existingItem.quantity += quantity;
//       } else {
//         // Otherwise, add a new item to the cart
//         cart.items.push({ productId, quantity });
//       }
//     }

//     // Save the cart
//     await cart.save();

//     res.status(201).send({ message: "Product added to cart" });
//   } catch (error) {
//     console.log("Failed to add product to cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Update Cart Item
// export const updateCart = async (req, res) => {
//   try {
//     const { userId, productId, quantity } = req.body;

//     // Find the cart for the user
//     const cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     // Find the item in the cart
//     const cartItem = cart.items.find(item => item.productId.toString() === productId);

//     if (!cartItem) {
//       return res.status(404).send({ message: "Item not found in cart" });
//     }

//     // Check if there's enough stock for the requested quantity
//     const product = await ProductModel.findById(productId);
//     if (!product || product.qty < quantity) {
//       return res.status(400).send({ message: "Insufficient stock for the requested quantity" });
//     }

//     // Update the quantity of the product in the cart
//     cartItem.quantity = quantity;

//     // Save the updated cart
//     await cart.save();

//     res.status(200).send({ message: "Cart updated successfully" });
//   } catch (error) {
//     console.log("Failed to update cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Remove Item from Cart
// export const removeFromCart = async (req, res) => {
//   try {
//     const { userId, productId } = req.body;

//     // Find the cart for the user
//     const cart = await CartModel.findOne({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     // Remove the item from the cart
//     cart.items = cart.items.filter(item => item.productId.toString() !== productId);

//     // Save the updated cart
//     await cart.save();

//     res.status(200).send({ message: "Item removed from cart" });
//   } catch (error) {
//     console.log("Failed to remove item from cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Get Cart Details
// export const getCartDetails = async (req, res) => {
//   try {
//     const { userId } = req.query;

//     // Find the cart for the user and populate product details
//     const cart = await CartModel.findOne({ userId }).populate("items.productId");

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     res.status(200).send({ cart });
//   } catch (error) {
//     console.log("Failed to fetch cart details:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };

// // Clear Cart
// export const clearCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     // Find and remove the user's cart
//     const cart = await CartModel.findOneAndDelete({ userId });

//     if (!cart) {
//       return res.status(404).send({ message: "Cart not found" });
//     }

//     res.status(200).send({ message: "Cart cleared" });
//   } catch (error) {
//     console.log("Failed to clear cart:", error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };




import CartModel from "../models/Cart.js";
import ProductModel from "../models/Product.js";

// Add Item to Cart
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Check if the product is valid
    const product = await ProductModel.findById(productId);
    if (!product) {
      console.log(`Product with ID ${productId} not found.`);
      return res.status(404).send({ message: "Product not found" });
    }

    // Check if the product is in stock
    if (product.qty <= 0) {
      console.log(`Product with ID ${productId} is out of stock.`);
      return res.status(400).send({ message: "Product is out of stock" });
    }

    // Check if the user already has a cart
    let cart = await CartModel.findOne({ userId });
    console.log("Cart fetched for user:", cart);

    if (!cart) {
      // If no cart exists for the user, create a new cart
      cart = new CartModel({
        userId,
        items: [{ productId, quantity }],
      });
      console.log("New cart created for user:", cart);
    } else {
      // Check if the product is already in the cart
      const existingItem = cart.items.find(item => item.productId.toString() === productId);
      console.log("Existing item:", existingItem);

      if (existingItem) {
        // If the product is in the cart, update the quantity
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add a new item to the cart
        cart.items.push({ productId, quantity });
      }
    }

    // Save the cart
    await cart.save()
      .then(() => {
        res.status(201).send({ message: "Product added to cart" });
      })
      .catch((err) => {
        console.error("Error saving cart:", err);
        res.status(500).send({ message: "Failed to save cart" });
      });

  } catch (error) {
    console.log("Failed to add product to cart:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Update Cart Item
export const updateCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find the cart for the user
    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    // Find the item in the cart
    const cartItem = cart.items.find(item => item.productId.toString() === productId);

    if (!cartItem) {
      return res.status(404).send({ message: "Item not found in cart" });
    }

    // Update the quantity of the product in the cart
    cartItem.quantity = quantity;

    // Save the updated cart
    await cart.save();

    res.status(200).send({ message: "Cart updated successfully" });
  } catch (error) {
    console.log("Failed to update cart:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Remove Item from Cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Find the cart for the user
    const cart = await CartModel.findOne({ userId });

    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(item => item.productId.toString() !== productId);

    // Save the updated cart
    await cart.save();

    res.status(200).send({ message: "Item removed from cart" });
  } catch (error) {
    console.log("Failed to remove item from cart:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Get Cart Details
export const getCartDetails = async (req, res) => {
  try {
    const { userId } = req.query;

    // Find the cart for the user and populate product details
    const cart = await CartModel.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    res.status(200).send({ cart });
  } catch (error) {
    console.log("Failed to fetch cart details:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// Clear Cart
export const clearCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find and remove the user's cart
    const cart = await CartModel.findOneAndDelete({ userId });

    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    res.status(200).send({ message: "Cart cleared" });
  } catch (error) {
    console.log("Failed to clear cart:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};
