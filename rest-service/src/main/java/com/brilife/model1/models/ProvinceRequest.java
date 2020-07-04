package com.brilife.model1.models;

import javax.validation.constraints.NotBlank;

public class ProvinceRequest {

    private Integer id;

    @NotBlank
    private String name;

    public ProvinceRequest() {
    }

    public ProvinceRequest(Integer id, @NotBlank String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
