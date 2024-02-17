package com.gym.rat.converters;

import com.gym.rat.dtos.RecordDto;
import com.gym.rat.entities.RecordEntity;
import org.springframework.stereotype.Component;

@Component
public class RecordConverter {

    public RecordDto toDto(RecordEntity entity){
        RecordDto dto = new RecordDto();
        dto.setId(entity.getId());
        dto.setExercise(entity.getExercise());
        dto.setWeight(entity.getWeight());
        dto.setReps(entity.getReps());
        dto.setDate(entity.getDate());
        return dto;
    }

    public RecordEntity toEntity(RecordDto dto){
        RecordEntity entity = new RecordEntity();
        entity.setId(dto.getId());
        entity.setExercise(dto.getExercise());
        entity.setWeight(dto.getWeight());
        entity.setReps(dto.getReps());
        entity.setDate(dto.getDate());
        return entity;
    }
}
