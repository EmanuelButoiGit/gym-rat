package com.gym.rat;

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
    public String getAllRatings()
    {
        return "Hello Gym Rat!";
    }
}
