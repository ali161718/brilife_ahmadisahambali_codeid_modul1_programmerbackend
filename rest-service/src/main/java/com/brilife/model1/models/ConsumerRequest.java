package com.brilife.model1.models;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class ConsumerRequest {

    private Integer id;

    @NotBlank
    private ProvinceRequest province;

    @NotBlank
    private ContraceptionRequest contraception;

    @NotNull
    private Integer amount;

    public ConsumerRequest() {
    }

    public ConsumerRequest(Integer id, @NotBlank ProvinceRequest province, @NotBlank ContraceptionRequest contraception,
                           @NotNull Integer amount) {
        this.id = id;
        this.province = province;
        this.contraception = contraception;
        this.amount = amount;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public ProvinceRequest getProvince() {
        return province;
    }

    public void setProvince(ProvinceRequest province) {
        this.province = province;
    }

    public ContraceptionRequest getContraception() {
        return contraception;
    }

    public void setContraception(ContraceptionRequest contraception) {
        this.contraception = contraception;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

}
