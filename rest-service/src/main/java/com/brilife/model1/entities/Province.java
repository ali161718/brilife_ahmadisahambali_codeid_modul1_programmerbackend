package com.brilife.model1.entities;

import javax.persistence.*;

@Entity
@Table(name = "list_propinsi")
public class Province {

    @Id
    @GeneratedValue
    @Column(name = "Id_Propinsi")
    private Integer id;

    @Column(name = "Nama_Propinsi", nullable = false)
    private String name;

    public Province() {
    }

    public Province(String name) {
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
