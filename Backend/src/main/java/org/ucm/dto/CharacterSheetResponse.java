package org.ucm.dto;

import lombok.*;
import org.ucm.models.GameSystem;
import org.ucm.models.Skill;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CharacterSheetResponse {
    private Long id;
    private String characterName;
    private GameSystem gameSystem;
    private String systemAttributes;
    private List<Skill> skills;
}
