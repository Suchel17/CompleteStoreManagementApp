package com.cjc.store.app.service;

import java.util.List;

import com.cjc.store.app.model.Product;

public interface ProductServicei {

	public void saveProduct(Product p);

	public List<Product> getProducts();

	public Product findByProduct(int id);

	public void updateProduct(int id, Product p);

	public List<Product> deleteProductByid(int id);

	

}
