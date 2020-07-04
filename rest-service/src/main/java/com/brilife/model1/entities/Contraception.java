package com.brilife.model1.entities;

import javax.persistence.*;

@Entity
@Table(name = "list_kontrasepsi")
public class Contraception {

    @Id
    @GeneratedValue
    @Column(name = "Id_Kontrasepsi")
    private Integer id;

    @Column(name = "Nama_Kontrasepsi", nullable = false)
    private String name;

    public Contraception() {
    }

    public Contraception(String name) {
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
