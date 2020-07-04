package com.brilife.model1.services.impl;

import com.brilife.model1.entities.Consumer;
import com.brilife.model1.repositories.ConsumerRepository;
import com.brilife.model1.services.ConsumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ConsumerServiceImpl extends CommonServiceImpl<Consumer, Integer> implements ConsumerService {

    @Autowired
    private ConsumerRepository consumerRepository;

    @Override
    protected JpaRepository<Consumer, Integer> getRepository() {
        return consumerRepository;
    }
}
