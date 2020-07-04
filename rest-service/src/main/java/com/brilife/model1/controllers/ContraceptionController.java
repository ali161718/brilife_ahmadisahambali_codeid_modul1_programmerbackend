package com.brilife.model1.controllers;

import com.brilife.model1.entities.Contraception;
import com.brilife.model1.models.PageableList;
import com.brilife.model1.models.ContraceptionRequest;
import com.brilife.model1.models.ResponseMessage;
import com.brilife.model1.services.ContraceptionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@RequestMapping("/contraception")
@RestController
public class ContraceptionController {

    @Autowired
    private ContraceptionService contraceptionService;

    @PostMapping
    public ResponseMessage<ContraceptionRequest> add(@RequestBody @Valid ContraceptionRequest request) {
        ModelMapper modelMapper = new ModelMapper();

        Contraception entity = contraceptionService.save(new Contraception(request.getName()));

        ContraceptionRequest data = modelMapper.map(entity, ContraceptionRequest.class);
        return ResponseMessage.successAdd(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<ContraceptionRequest> edit(@PathVariable Integer id, @RequestBody @Valid ContraceptionRequest request){
        ModelMapper modelMapper = new ModelMapper();

        Contraception entity = contraceptionService.findById(id);

        entity.setName(request.getName());

        entity = contraceptionService.save(entity);

        ContraceptionRequest data = modelMapper.map(entity, ContraceptionRequest.class);
        return ResponseMessage.successEdit(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<ContraceptionRequest> removeById(@PathVariable Integer id) {
        Contraception entity = contraceptionService.removeById(id);

        ModelMapper modelMapper = new ModelMapper();
        ContraceptionRequest data = modelMapper.map(entity, ContraceptionRequest.class);

        return ResponseMessage.successDelete(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<ContraceptionRequest> findById(@PathVariable Integer id) {
        Contraception entity = contraceptionService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        ContraceptionRequest data = modelMapper.map(entity, ContraceptionRequest.class);

        return ResponseMessage.success(data);
    }

    @GetMapping
    public ResponseMessage<PageableList<ContraceptionRequest>> findAll(
            @RequestParam(required = false) String name,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        Contraception entity = new Contraception(name);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Contraception> pageContraceptions = contraceptionService.findAll(entity, page, size, direction);
        List<Contraception> contraceptions = pageContraceptions.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<ContraceptionRequest>>() {
        }.getType();
        List<ContraceptionRequest> contraceptionModels = modelMapper.map(contraceptions, type);
        PageableList<ContraceptionRequest> data = new PageableList(contraceptionModels, pageContraceptions.getNumber(),
                pageContraceptions.getSize(), pageContraceptions.getTotalElements());

        return ResponseMessage.success(data);
    }
}
