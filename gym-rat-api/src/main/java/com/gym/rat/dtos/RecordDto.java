package com.gym.rat.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RecordDto {
    private Long id;
    private String exercise;
    private Double weight;
    private Integer reps;
    private LocalDateTime date;
}
