package com.cjc.store.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cjc.store.app.model.Product;
import com.cjc.store.app.repository.ProductRepository;

@Service
public class ProductServiceimpl implements ProductServicei {
	
	@Autowired
	ProductRepository pr;

	@Override
	public void saveProduct(Product p) {
		
		pr.save(p);
		
	}

	@Override
	public List<Product> getProducts() {
		
		return pr.findAll();
	}

	@Override
	public Product findByProduct(int id) {
		
		return pr.findById(id).get();
	}

	@Override
	public void updateProduct(int id, Product p) {
		
		Optional<Product> op = pr.findById(id);
		
		if(op.isPresent()) {
			Product product = op.get();
			product.setProductPrice(p.getProductPrice());
			product.setAvailable(p.isAvailable());
			product.setProductName(p.getProductName());
			product.setProductCategory(p.getProductCategory());
			pr.save(product);
		}
		
	}

	@Override
	public List<Product> deleteProductByid(int id) {
		
		pr.deleteById(id);
		
		return pr.findAll();
	}
	
	
}
