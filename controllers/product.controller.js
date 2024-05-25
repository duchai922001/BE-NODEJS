const ProductModel = require("../models/product.model");
const createError = require("../utils/error");
module.exports = {
  createProduct: async (req, res, next) => {
    try {
      const bodyData = req.body;
      const newProduct = await ProductModel.create(bodyData);
      return res.status(201).json({
        success: true,
        message: "Tạo sản phẩm thành công",
        newProduct,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const products = await ProductModel.find();
      return res.json({
        success: true,
        message: "Lấy sản phẩm thành công",
        products,
      });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const body = req.body;
      const productId = req.params.id;
      const exitedProduct = await ProductModel.findById(productId);
      if (exitedProduct) {
        const updateProduct = await ProductModel.findByIdAndUpdate(
          productId,
          body,
          { new: true }
        );
        return res.json({
          success: true,
          message: "Cập nhật sản phẩm thành công",
          product: updateProduct,
        });
      }
      return next(createError(res, 404, "Không tìm thấy sản phẩm"));
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },

  deleteProduct: async (req, res, next) => {
    try {
      const productId = req.params.id;
      const exitedProduct = await ProductModel.findById(productId);
      if (!exitedProduct) {
        return next(createError(res, 404, "Không tìm thấy sản phẩm"));
      }
      await ProductModel.findOneAndDelete({ _id: productId });
      return res.json({ success: true, message: "Xóa sản phẩm thành công" });
    } catch (error) {
      return next(createError(res, 500, error.message));
    }
  },
};
