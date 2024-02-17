package com.gym.rat.converters;

import com.gym.rat.dtos.AchievementsDto;
import com.gym.rat.entities.AchievementsEntity;
import org.springframework.stereotype.Component;

@Component
public class AchievementsConverter {

    public AchievementsDto toDto(AchievementsEntity entity){
        AchievementsDto dto = new AchievementsDto();
        dto.setId(entity.getId());
        dto.setSmile(entity.getSmile());
        dto.setCardio(entity.getCardio());
        dto.setBro(entity.getBro());
        dto.setLeg(entity.getLeg());
        dto.setBrah(entity.getBrah());
        dto.setRest(entity.getRest());
        return dto;
    }

    public AchievementsEntity toEntity(AchievementsDto dto){
        AchievementsEntity entity = new AchievementsEntity();
        entity.setId(dto.getId());
        entity.setSmile(dto.getSmile());
        entity.setCardio(dto.getCardio());
        entity.setBro(dto.getBro());
        entity.setLeg(dto.getLeg());
        entity.setBrah(dto.getBrah());
        entity.setRest(dto.getRest());
        return entity;
    }
}
