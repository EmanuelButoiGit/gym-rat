package com.gym.rat.dtos;

import lombok.Data;

@Data
public class RecordDto {
    private Long id;
    private String exercise;
    private Double weight;
    private Integer reps;
}
