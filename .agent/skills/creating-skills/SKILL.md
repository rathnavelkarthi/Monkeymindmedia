---
name: creating-skills
description: Generates structured Antigravity skill directories under .agent/skills/. Use when the user asks to create a skill, build a skill, add a skill, or scaffold a new agent capability. Produces a SKILL.md with YAML frontmatter plus optional scripts/, examples/, and resources/ subdirectories.
---

# Creating Antigravity Skills

## When to use this skill
- User says "create a skill", "build a skill", "add a skill", or "make a new skill"
- User asks to scaffold a new agent capability or workflow
- User references `.agent/skills/` directly

## Workflow

Copy and track this checklist per skill creation request:

- [ ] Clarify the skill's purpose and triggers if not obvious
- [ ] Determine which optional directories are needed (`scripts/`, `examples/`, `resources/`)
- [ ] Draft `SKILL.md` following the standards below
- [ ] Write any supporting files
- [ ] Write all files to `.agent/skills/<skill-name>/`
- [ ] Confirm output structure with user

## Structural Requirements

```
.agent/skills/<skill-name>/
├── SKILL.md          # Required
├── scripts/          # Optional – helper scripts
├── examples/         # Optional – reference implementations
└── resources/        # Optional – templates or assets
```

## SKILL.md Standards

### YAML Frontmatter rules
- **name**: gerund form, lowercase, hyphens only, max 64 chars (e.g. `testing-code`)
- **description**: third-person, includes specific trigger keywords, max 1024 chars

### Body writing principles
- Be concise — assume the agent is intelligent
- Stay under **500 lines**; link to secondary files if more depth is needed (`[See ADVANCED.md](ADVANCED.md)`)
- Always use **forward slashes** for paths
- Match instruction style to task freedom:
  - High freedom → bullet points (heuristics)
  - Medium freedom → code block templates
  - Low/fragile → exact shell commands

### Feedback loops (for complex skills)
- Include a **markdown checklist** the agent can copy and update
- Follow **Plan → Validate → Execute** ordering
- For scripts: tell the agent to run `--help` if usage is unclear

## Output Template

When writing a new skill, produce:

### SKILL.md
```markdown
---
name: [gerund-name]
description: [3rd-person, trigger-keyword-rich description]
---

# [Skill Title]

## When to use this skill
- [Trigger 1]
- [Trigger 2]

## Workflow
- [ ] Step 1
- [ ] Step 2

## Instructions
[Logic, templates, or exact commands]

## Resources
- [scripts/foo.sh](scripts/foo.sh) – description
```

Then write supporting files under `scripts/`, `examples/`, or `resources/` as needed.

## Path Conventions
- Root: `.agent/skills/<skill-name>/`
- Always write using absolute paths when using file tools
- Never use backslashes in generated content
