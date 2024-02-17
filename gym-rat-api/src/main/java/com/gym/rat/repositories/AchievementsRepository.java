package com.gym.rat.repositories;

import com.gym.rat.entities.AchievementsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementsRepository extends JpaRepository<AchievementsEntity, Integer> {

}
