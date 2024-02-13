package com.gym.rat;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class AchievementsEntity {
    private Integer id;
    private Boolean smile;
    private Boolean cardio;
    private Boolean bro;
    private Boolean leg;
    private Boolean brah;
    private Boolean rest;
}
