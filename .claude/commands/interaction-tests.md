---
description: "Generate Storybook interaction tests for a given story"
argument-hint: [story-file] [story-name]
---

Generate Storybook interaction tests for a Storybook story file named $story-file located in the @src/components directory with the following specifications:

- If the story file does not exist, respond with "Story file $story-file does not exist"
- If the story file already has interaction tests defined, do not overwrite them and respond with "Interaction tests for story file $story-file already exist"
- Interaction tests should be applied to the specific story named $story-name within the story file
- If the story name does not exist within the story file, respond with "Story $story-name does not exist in file $story-file"
- The interaction tests should cover user interactions such as clicks, form inputs, and other relevant events to validate the component's behavior in response to these actions.
- It should include assertions to verify that the component's state and UI update correctly after each interaction.
