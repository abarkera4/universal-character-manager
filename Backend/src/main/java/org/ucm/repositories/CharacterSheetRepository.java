package org.ucm.repositories;

import org.ucm.models.CharacterSheet;
import org.ucm.models.GameSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CharacterSheetRepository extends JpaRepository<CharacterSheet, Long> {
    List<CharacterSheet> findByOwnerId(Long ownerId);
    List<CharacterSheet> findByGameSystem(GameSystem gameSystem);
}
