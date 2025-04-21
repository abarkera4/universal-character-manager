package org.ucm.services;

import lombok.RequiredArgsConstructor;
import org.ucm.models.Skill;
import org.ucm.repositories.SkillRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;

    public List<Skill> getSkillsForCharacter(Long characterSheetId) {
        return skillRepository.findByCharacterSheetId(characterSheetId);
    }
}
