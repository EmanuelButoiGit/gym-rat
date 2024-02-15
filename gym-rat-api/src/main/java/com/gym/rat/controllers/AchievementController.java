package com.gym.rat.controllers;

import com.gym.rat.AchievementService;
import com.gym.rat.dtos.AchievementsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/achievements")
public class AchievementController {

    private final AchievementService achievementService;

    @PostMapping("/smile")
    public void saveSmileAchievement() {
        achievementService.saveSmileAchievement();
    }

    @PostMapping("/cardio")
    public void saveCardioAchievement() {
        achievementService.saveCardioAchievement();
    }

    @PostMapping("/bro")
    public void saveBroAchievement() {
        achievementService.saveBroAchievement();
    }

    @PostMapping("/leg")
    public void saveLegAchievement() {
        achievementService.saveLegAchievement();
    }

    @PostMapping("/brah")
    public void saveBrahAchievement() {
        achievementService.saveBrahAchievement();
    }

    @PostMapping("/rest")
    public void saveRestAchievement() {
        achievementService.saveRestAchievement();
    }

    @GetMapping()
    public AchievementsDto getAchievements() {
        return achievementService.getAchievements();
    }
}
