package com.brilife.model1.controllers;

import com.brilife.model1.entities.Province;
import com.brilife.model1.models.PageableList;
import com.brilife.model1.models.ProvinceRequest;
import com.brilife.model1.models.ResponseMessage;
import com.brilife.model1.services.ProvinceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@RequestMapping("/province")
@RestController
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    @PostMapping
    public ResponseMessage<ProvinceRequest> add(@RequestBody @Valid ProvinceRequest request) {
        ModelMapper modelMapper = new ModelMapper();

        Province entity = provinceService.save(new Province(request.getName()));

        ProvinceRequest data = modelMapper.map(entity, ProvinceRequest.class);
        return ResponseMessage.successAdd(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<ProvinceRequest> edit(@PathVariable Integer id, @RequestBody @Valid ProvinceRequest request) {
        ModelMapper modelMapper = new ModelMapper();

        Province entity = provinceService.findById(id);

        entity.setName(request.getName());

        entity = provinceService.save(entity);

        ProvinceRequest data = modelMapper.map(entity, ProvinceRequest.class);
        return ResponseMessage.successEdit(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<ProvinceRequest> removeById(@PathVariable Integer id) {
        Province entity = provinceService.removeById(id);

        ModelMapper modelMapper = new ModelMapper();
        ProvinceRequest data = modelMapper.map(entity, ProvinceRequest.class);

        return ResponseMessage.successDelete(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<ProvinceRequest> findById(@PathVariable Integer id) {
        Province entity = provinceService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        ProvinceRequest data = modelMapper.map(entity, ProvinceRequest.class);

        return ResponseMessage.success(data);
    }

    @GetMapping
    public ResponseMessage<PageableList<ProvinceRequest>> findAll(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        Province entity = new Province(name);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Province> pageProvinces = provinceService.findAll(entity, page, size, direction);
        List<Province> provinces = pageProvinces.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<ProvinceRequest>>() {
        }.getType();
        List<ProvinceRequest> provinceModels = modelMapper.map(provinces, type);
        PageableList<ProvinceRequest> data = new PageableList(provinceModels, pageProvinces.getNumber(),
                pageProvinces.getSize(), pageProvinces.getTotalElements());

        return ResponseMessage.success(data);
    }
}
