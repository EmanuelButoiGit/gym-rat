package com.gym.rat.services;

import com.gym.rat.converters.RecordConverter;
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
    private final RecordConverter converter;

    public void saveWorkout(List<RecordDto> records) {
        LocalDateTime now = LocalDateTime.now();
        records.forEach(item -> item.setDate(now));
        List<RecordEntity> savedWorkout = records.stream().map(converter::toEntity).toList();
        repo.saveAll(savedWorkout);
    }

    public List<RecordDto> getAllRecords() {
        List<RecordEntity> recordEntities = repo.findAll();
        return recordEntities.stream().map(converter::toDto).toList();
    }
}
