package org.ucm.services;

import lombok.RequiredArgsConstructor;
import org.ucm.dto.CharacterSheetRequest;
import org.ucm.dto.SkillRequest;
import org.ucm.models.CharacterSheet;
import org.ucm.models.Skill;
import org.ucm.models.User;
import org.ucm.repositories.CharacterSheetRepository;
import org.ucm.repositories.SkillRepository;
import org.ucm.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CharacterSheetService {

    private final CharacterSheetRepository characterSheetRepository;
    private final SkillRepository skillRepository;
    private final UserRepository userRepository;

    @Transactional
    public CharacterSheet createCharacterSheet(CharacterSheetRequest request) {
        User owner = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        CharacterSheet characterSheet = CharacterSheet.builder()
                .owner(owner)
                .characterName(request.getCharacterName())
                .gameSystem(request.getGameSystem())
                .systemAttributes(request.getSystemAttributes())
                .build();

        CharacterSheet savedSheet = characterSheetRepository.save(characterSheet);

        List<Skill> skills = request.getSkills().stream()
                .map(skillRequest -> Skill.builder()
                        .characterSheet(savedSheet)
                        .name(skillRequest.getName())
                        .value(skillRequest.getValue())
                        .predefined(skillRequest.isPredefined())
                        .build())
                .toList();

        skillRepository.saveAll(skills);

        // Force load skills
        savedSheet.setSkills(skillRepository.findByCharacterSheetId(savedSheet.getId()));

        return savedSheet;
    }



    public List<CharacterSheet> getCharacterSheetsByUser(Long userId) {
        return characterSheetRepository.findByOwnerId(userId);
    }
}
