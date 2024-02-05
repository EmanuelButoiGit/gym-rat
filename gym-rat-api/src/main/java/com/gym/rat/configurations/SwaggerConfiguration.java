package com.gym.rat.configurations;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition
@Configuration
public class SwaggerConfiguration {
    @Bean
    public OpenAPI baseOpenAPI(){
        return new OpenAPI().info(
                new Info()
                        .title("Gym Rat API")
                        .contact(new Contact()
                                .name("Butoi Emanuel-Sebastian")
                                .url("https://www.linkedin.com/in/emanuel-sebastian-butoi-929271213/"))
        );
    }
}
