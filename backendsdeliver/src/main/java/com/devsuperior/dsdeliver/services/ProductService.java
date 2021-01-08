package com.devsuperior.dsdeliver.services;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    @Transactional
    public List<ProductDTO> findAll(){
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList()); // recebendo a lista de produtos e convertendo(stream)
        //os dados obtidos e mapeando(map) para um productDTO e voltando a ser uma list novamente so que sendo uma list productDTO
    }


}
