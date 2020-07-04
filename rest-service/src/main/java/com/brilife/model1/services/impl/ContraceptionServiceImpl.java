package com.brilife.model1.services.impl;

import com.brilife.model1.entities.Contraception;
import com.brilife.model1.repositories.ContraceptionRepository;
import com.brilife.model1.services.ContraceptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ContraceptionServiceImpl extends CommonServiceImpl<Contraception, Integer> implements ContraceptionService {

    @Autowired
    private ContraceptionRepository contraceptionRepository;

    @Override
    protected JpaRepository<Contraception, Integer> getRepository() {
        return contraceptionRepository;
    }
}
