package org.ucm.controllers;

import lombok.RequiredArgsConstructor;
import org.ucm.dto.CharacterSheetRequest;
import org.ucm.dto.CharacterSheetResponse;
import org.ucm.models.CharacterSheet;
import org.ucm.services.CharacterSheetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/character-sheets")
@RequiredArgsConstructor
public class CharacterSheetController {

    private final CharacterSheetService characterSheetService;

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<CharacterSheetResponse> createCharacter(@RequestBody CharacterSheetRequest request) {
        CharacterSheet sheet = characterSheetService.createCharacterSheet(request);

        // Convert to DTO
        CharacterSheetResponse response = CharacterSheetResponse.builder()
                .id(sheet.getId())
                .characterName(sheet.getCharacterName())
                .gameSystem(sheet.getGameSystem())
                .systemAttributes(sheet.getSystemAttributes())
                .skills(sheet.getSkills())
                .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/{userId}")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity<List<CharacterSheet>> getCharacterSheets(@PathVariable Long userId) {
        return ResponseEntity.ok(characterSheetService.getCharacterSheetsByUser(userId));
    }
}
