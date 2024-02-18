package com.gym.rat.services;

import com.gym.rat.converters.AchievementConverter;
import com.gym.rat.dtos.RecordDto;
import com.gym.rat.repositories.AchievementsRepository;
import com.gym.rat.dtos.AchievementsDto;
import com.gym.rat.entities.AchievementsEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AchievementService {

    private final AchievementsRepository repo;
    private final AchievementConverter converter;

    public AchievementsDto getAchievements() {
        // get first entry from table because there is only 1 user
        AchievementsEntity entity = repo.getReferenceById(1);
        return converter.toDto(entity);
    }

    public void saveSmileAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setSmile(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    public void saveBroAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setBro(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    private void checkLegFlag(List<RecordDto> checkRecords, AchievementsDto achievements) {
        int legCounter = 0;
        for (RecordDto dto : checkRecords) {
            if (dto.getExercise().contains("leg")) {
                legCounter++;
            }
        }
        if (legCounter >= 30) {
            achievements.setLeg(true);
        }
    }

    private void checkCardioFlag(List<RecordDto> checkRecords, AchievementsDto achievements) {
        int cardioCounter = 0;
        for (RecordDto dto : checkRecords) {
            if (dto.getExercise().contains("cycle") || dto.getExercise().contains("swim") || dto.getExercise().contains("run")
                    || dto.getExercise().contains("box") || dto.getExercise().contains("cardio")) {
                cardioCounter++;
            }
        }
        if (cardioCounter >= 30) {
            achievements.setCardio(true);
        }
    }

    private void checkRestFlag(AchievementsDto achievements, Set<LocalDateTime> distinctDates) {
        TreeSet<LocalDateTime> sortedDates = new TreeSet<>(Collections.reverseOrder());
        sortedDates.addAll(distinctDates);
        LocalDateTime previousDate = null;
        for (LocalDateTime currentDate : sortedDates) {
            if (previousDate != null) {
                long daysBetween = Duration.between(previousDate, currentDate).toDays();
                if(daysBetween >= 2){
                    achievements.setRest(true);
                }
            }
            previousDate = currentDate;
        }
    }

    public void checkFlags(List<RecordDto> records, List<RecordDto> allRecords) {
        // combine dates
        List<RecordDto> checkRecords = new ArrayList<>(allRecords);
        checkRecords.addAll(records);

        AchievementsDto achievements = getAchievements();
        if (Boolean.FALSE.equals(achievements.getLeg())) {
            checkLegFlag(checkRecords, achievements);
        }
        if (Boolean.FALSE.equals(achievements.getCardio())) {
            checkLegFlag(checkRecords, achievements);
        }
        List<LocalDateTime> dates = new ArrayList<>();
        for (RecordDto dto : checkRecords) {
            dates.add(dto.getDate());
        }
        Set<LocalDateTime> distinctDates = new HashSet<>(dates);
        if (Boolean.FALSE.equals(achievements.getBrah()) && (distinctDates.size() >= 30)) {
                achievements.setBrah(true);
        }
        if (Boolean.FALSE.equals(achievements.getRest())) {
            checkRestFlag(achievements, distinctDates);
        }
    }
}
