package com.gym.rat;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/test")
public class TestController {
    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    @Operation(summary = "Get message")
    @ApiResponse(responseCode = "200", description = "The massage was retrieved")
    public String getAllRatings()
    {
        return "Hello Gym Rat!";
    }
}
