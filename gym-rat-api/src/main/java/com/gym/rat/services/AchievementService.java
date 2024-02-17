package com.gym.rat.services;

import com.gym.rat.AchievementsConverter;
import com.gym.rat.repositories.AchievementsRepository;
import com.gym.rat.dtos.AchievementsDto;
import com.gym.rat.entities.AchievementsEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AchievementService {

    private final AchievementsRepository repo;
    private final AchievementsConverter converter;

    public AchievementsDto getAchievements(){
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

    public void saveCardioAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setCardio(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    public void saveBroAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setBro(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    public void saveLegAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setLeg(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    public void saveBrahAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setBrah(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }

    public void saveRestAchievement() {
        AchievementsDto achievements = getAchievements();
        achievements.setSmile(true);
        AchievementsEntity savedAchievements = converter.toEntity(achievements);
        repo.save(savedAchievements);
    }
}
