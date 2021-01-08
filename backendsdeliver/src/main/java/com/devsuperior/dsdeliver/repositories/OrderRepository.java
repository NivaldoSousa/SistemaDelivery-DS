package com.devsuperior.dsdeliver.repositories;

import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    @Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
    + " WHERE obj.status = 0 ORDER BY obj.moment ASC") //consulta em JPQL para trazer os pedidos pedentes(PENDING)
    List<Order> findOrdersWithProducts();
}
