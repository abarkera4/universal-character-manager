package org.ucm.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "character_sheet_id", nullable = false)
    @JsonBackReference // Prevents infinite recursion
    private CharacterSheet characterSheet;

    private String name;
    private int value;
    private boolean predefined;
}
