---
description: "Generate random viewports for a given component"
argument-hint: [story-file] [story-name]
---

Generate random viewports for a Storybook story file named $story-file located in the @src/components directory with the following specifications:

- If the story file does not exist, respond with "Story file $story-file does not exist"
- If the story file already has viewports defined, do not overwrite them and respond with "Viewports for story file $story-file already exist"
- Vieports should be a applied to the specific story named $story-name within the story file
- If the story name does not exist within the story file, respond with "Story $story-name does not exist in file $story-file"
