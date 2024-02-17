package com.gym.rat.controllers;

import com.gym.rat.services.WorkoutService;
import com.gym.rat.dtos.RecordDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/workout")
public class WorkoutController {
    private final WorkoutService workoutService;
    @PostMapping
    public void createExerciseRecord(@RequestBody List<RecordDto> workout) {
        workoutService.saveWorkout(workout);
    }
}
