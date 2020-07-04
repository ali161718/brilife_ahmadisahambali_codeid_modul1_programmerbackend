package com.brilife.model1.services.impl;

import com.brilife.model1.entities.Province;
import com.brilife.model1.repositories.ProvinceRepository;
import com.brilife.model1.services.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ProvinceServiceImpl extends CommonServiceImpl<Province, Integer> implements ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    @Override
    protected JpaRepository<Province, Integer> getRepository() {
        return provinceRepository;
    }

}
