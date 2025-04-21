package org.ucm.dto;

import lombok.*;
import org.ucm.models.GameSystem;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CharacterSheetRequest {
    private Long userId;
    private String characterName;
    private GameSystem gameSystem;
    private String systemAttributes;
    private List<SkillRequest> skills;
}
