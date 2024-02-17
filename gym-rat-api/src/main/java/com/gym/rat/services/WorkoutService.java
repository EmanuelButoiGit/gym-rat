package com.gym.rat.services;

import com.gym.rat.repositories.WorkoutRepository;
import com.gym.rat.dtos.RecordDto;
import com.gym.rat.entities.RecordEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkoutService {
    private final WorkoutRepository repo;

    public RecordEntity toEntity(RecordDto dto){
        RecordEntity entity = new RecordEntity();
        entity.setId(dto.getId());
        entity.setExercise(dto.getExercise());
        entity.setWeight(dto.getWeight());
        entity.setReps(dto.getReps());
        entity.setDate(dto.getDate());
        return entity;
    }

    public void saveWorkout(List<RecordDto> records) {
        LocalDateTime now = LocalDateTime.now();
        records.forEach(item -> item.setDate(now));
        List<RecordEntity> savedWorkout = records.stream().map(this::toEntity).toList();
        repo.saveAll(savedWorkout);
    }
}
