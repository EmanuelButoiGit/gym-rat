package com.gym.rat.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "achievements")
@NoArgsConstructor
@AllArgsConstructor
public class AchievementsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Boolean smile;
    private Boolean cardio;
    private Boolean bro;
    private Boolean leg;
    private Boolean brah;
    private Boolean rest;
}
