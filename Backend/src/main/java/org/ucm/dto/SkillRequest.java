package org.ucm.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillRequest {
    private String name;
    private int value;
    private boolean predefined;
}
