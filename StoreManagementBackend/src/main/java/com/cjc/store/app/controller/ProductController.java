package com.cjc.store.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cjc.store.app.model.Product;
import com.cjc.store.app.service.ProductServicei;

@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	ProductServicei psi;
	
	@PostMapping("/products") //http:localhost:9090/products
	public void saveProduct(@RequestBody Product p) {
		System.out.println(p);
		psi.saveProduct(p);	
	}
	
	@GetMapping("/products")
	public List<Product> getProducts(){
		
		return psi.getProducts();
	}
	
	@GetMapping("/products/{id}")
	public Product getSingleProduct(@PathVariable("id") int id) {
		
		return psi.findByProduct(id);
	}
	
	@PutMapping("/products/{id}")
	public void updateProduct(@PathVariable("id") int id, @RequestBody Product p) {
		
		psi.updateProduct(id,p);
	}
	
	@DeleteMapping("/products/{id}")
	public List<Product> deleteProductById(@PathVariable("id") int id){
		
		return psi.deleteProductByid(id);
	}
}
