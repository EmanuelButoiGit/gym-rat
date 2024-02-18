package com.gym.rat.controllers;

import com.gym.rat.services.AchievementService;
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

    @PostMapping("/bro")
    public void saveBroAchievement() {
        achievementService.saveBroAchievement();
    }

    @GetMapping()
    public AchievementsDto getAchievements() {
        return achievementService.getAchievements();
    }
}
