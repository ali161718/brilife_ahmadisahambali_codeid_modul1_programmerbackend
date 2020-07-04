package com.brilife.model1.services.impl;

import com.brilife.model1.services.CommonService;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import javax.transaction.Transactional;

import javax.persistence.EntityNotFoundException;

@Transactional
public abstract class CommonServiceImpl<E, K> implements CommonService<E, K> {

    protected abstract JpaRepository<E, K> getRepository();

    @Override
    public E save(E entity) {
        return getRepository().save(entity);
    }

    @Override
    public E removeById(K id) {
        E entity = findById(id);
        getRepository().delete(entity);

        return entity;
    }

    @Override
    public E findById(K id) {
        return getRepository().findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public Page<E> findAll(E entity, int page, int size, Sort.Direction direction) {
        Sort sort = Sort.Direction.DESC.equals(direction) ? Sort.by(direction, "id").descending() : Sort.by("id");
        ExampleMatcher matcher = ExampleMatcher.matchingAll()
                .withIgnoreCase()
                .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        return getRepository().findAll(Example.of(entity, matcher), PageRequest.of(page, size, sort));
    }
}
