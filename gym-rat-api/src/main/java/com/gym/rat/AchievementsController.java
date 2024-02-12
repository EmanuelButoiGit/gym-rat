package com.gym.rat;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpServerErrorException;

import java.util.List;

@RestController
@RequestMapping("api/achievements")
public class AchievementsController {
    @CrossOrigin
    @PostMapping("/smile")
    public void saveSmileAchievement() {
        // get first entry from table because there is only 1 user
        // change flag to true
    }

    @CrossOrigin
    @PostMapping("/cardio")
    public void saveCardioAchievement() {
    }

    @CrossOrigin
    @PostMapping("/bro")
    public void saveBroAchievement() {
    }

    @CrossOrigin
    @PostMapping("/leg")
    public void saveLegAchievement() {
    }

    @CrossOrigin
    @PostMapping("/brah")
    public void saveBrahAchievement() {
    }

    @CrossOrigin
    @PostMapping("/rest")
    public void saveRestAchievement() {
    }

    @GetMapping()
    public void getAchievements() {
        // get first entry from table because there is only 1 user
    }
}
