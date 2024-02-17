package com.gym.rat.repositories;

import com.gym.rat.entities.RecordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutRepository extends JpaRepository<RecordEntity, Integer> {
}
