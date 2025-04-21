package org.ucm.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "character_sheets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CharacterSheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User owner;

    private String characterName;

    @Enumerated(EnumType.STRING)
    private GameSystem gameSystem;

    @OneToMany(mappedBy = "characterSheet", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Skill> skills;

    @Column(columnDefinition = "TEXT")
    private String systemAttributes;
}
