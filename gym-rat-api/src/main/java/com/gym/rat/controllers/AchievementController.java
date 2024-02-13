package com.gym.rat.controllers;

import com.gym.rat.AchievementService;
import com.gym.rat.dtos.AchievementsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/achievements")
public class AchievementController {

    private final AchievementService achievementService;

    @CrossOrigin
    @PostMapping("/smile")
    public void saveSmileAchievement() {
        achievementService.saveSmileAchievement();
    }

    @CrossOrigin
    @PostMapping("/cardio")
    public void saveCardioAchievement() {
        achievementService.saveCardioAchievement();
    }

    @CrossOrigin
    @PostMapping("/bro")
    public void saveBroAchievement() {
        achievementService.saveBroAchievement();
    }

    @CrossOrigin
    @PostMapping("/leg")
    public void saveLegAchievement() {
        achievementService.saveLegAchievement();
    }

    @CrossOrigin
    @PostMapping("/brah")
    public void saveBrahAchievement() {
        achievementService.saveBrahAchievement();
    }

    @CrossOrigin
    @PostMapping("/rest")
    public void saveRestAchievement() {
        achievementService.saveRestAchievement();
    }

    @GetMapping()
    public AchievementsDto getAchievements() {
        return achievementService.getAchievements();
    }
}
