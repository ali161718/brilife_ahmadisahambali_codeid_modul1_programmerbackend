package com.brilife.model1.controllers;

import com.brilife.model1.entities.Consumer;
import com.brilife.model1.entities.Contraception;
import com.brilife.model1.entities.Province;
import com.brilife.model1.models.PageableList;
import com.brilife.model1.models.ConsumerRequest;
import com.brilife.model1.models.ResponseMessage;
import com.brilife.model1.services.ConsumerService;
import com.brilife.model1.services.ContraceptionService;
import com.brilife.model1.services.ProvinceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;

@RequestMapping("/consumer")
@RestController
public class ConsumerController {

    @Autowired
    private ConsumerService consumerService;

    @Autowired
    private ProvinceService provinceService;

    @Autowired
    private ContraceptionService contraceptionService;

    @PostMapping
    public ResponseMessage<ConsumerRequest> add(@RequestBody ConsumerRequest request) {
        ModelMapper modelMapper = new ModelMapper();

        Province province = provinceService.findById(request.getProvince().getId());
        Contraception contraception = contraceptionService.findById(request.getContraception().getId());

        Consumer entity = consumerService.save(new Consumer(request.getAmount(), province, contraception));

        ConsumerRequest data = modelMapper.map(entity, ConsumerRequest.class);
        return ResponseMessage.successAdd(data);
    }

    @PutMapping("/{id}")
    public ResponseMessage<ConsumerRequest> edit(@PathVariable Integer id, @RequestBody  ConsumerRequest request){
        ModelMapper modelMapper = new ModelMapper();

        Consumer entity = consumerService.findById(id);

        entity.setProvince(provinceService.findById(request.getProvince().getId()));
        entity.setContraception(contraceptionService.findById(request.getContraception().getId()));
        entity.setAmount(request.getAmount());

        entity = consumerService.save(entity);

        ConsumerRequest data = modelMapper.map(entity, ConsumerRequest.class);
        return ResponseMessage.successEdit(data);
    }

    @DeleteMapping("/{id}")
    public ResponseMessage<ConsumerRequest> removeById(@PathVariable Integer id) {
        Consumer entity = consumerService.removeById(id);

        ModelMapper modelMapper = new ModelMapper();
        ConsumerRequest data = modelMapper.map(entity, ConsumerRequest.class);

        return ResponseMessage.successDelete(data);
    }

    @GetMapping("/{id}")
    public ResponseMessage<ConsumerRequest> findById(@PathVariable Integer id) {
        Consumer entity = consumerService.findById(id);

        ModelMapper modelMapper = new ModelMapper();
        ConsumerRequest data = modelMapper.map(entity, ConsumerRequest.class);

        return ResponseMessage.success(data);
    }

    @GetMapping
    public ResponseMessage<PageableList<ConsumerRequest>> findAll(
            @RequestParam(required = false) Province province,
                            Contraception contraception, Integer amount,
            @RequestParam(defaultValue = "asc") String sort,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        Consumer entity = new Consumer(amount, province, contraception);
        Sort.Direction direction = Sort.Direction
                .fromOptionalString(sort.toUpperCase())
                .orElse(Sort.Direction.ASC);
        Page<Consumer> pageConsumers = consumerService.findAll(entity, page, size, direction);
        List<Consumer> consumers = pageConsumers.toList();

        ModelMapper modelMapper = new ModelMapper();
        Type type = new TypeToken<List<ConsumerRequest>>() {
        }.getType();
        List<ConsumerRequest> consumerModels = modelMapper.map(consumers, type);
        PageableList<ConsumerRequest> data = new PageableList(consumerModels, pageConsumers.getNumber(),
                pageConsumers.getSize(), pageConsumers.getTotalElements());

        return ResponseMessage.success(data);
    }
}
