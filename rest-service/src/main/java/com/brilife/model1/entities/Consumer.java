package com.brilife.model1.entities;

import javax.persistence.*;

@Entity
@Table(name = "list_pemakai_kontrasepsi")
public class Consumer {

    @Id
    @GeneratedValue
    @Column(name = "Id_List")
    private Integer id;

    @Column(name = "Jumlah_Pemakai")
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "Id_Propinsi", nullable = false)
    private Province province;

    @ManyToOne
    @JoinColumn(name = "Id_Kontrasepsi", nullable = false)
    private Contraception contraception;

    public Consumer() {
    }

    public Consumer(Integer amount, Province province, Contraception contraception) {
        this.amount = amount;
        this.province = province;
        this.contraception = contraception;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }

    public Contraception getContraception() {
        return contraception;
    }

    public void setContraception(Contraception contraception) {
        this.contraception = contraception;
    }
}
