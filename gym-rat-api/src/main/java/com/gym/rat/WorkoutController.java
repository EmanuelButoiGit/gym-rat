package com.gym.rat;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/workout")
public class WorkoutController {
    @CrossOrigin
    @PostMapping
    public String createExerciseRecord(@RequestBody List<RecordDto> workout) {
        StringBuilder textToPrint = new StringBuilder("");
        workout.forEach(recordDto ->
                textToPrint.append("exercise: ").append(recordDto.getExercise())
                        .append(" weight: ").append(recordDto.getWeight())
                        .append(" reps").append(recordDto.getReps())
                        .append("\n")
        );

        return textToPrint.toString();
    }
}
