---
description: "Create 100 stories for a given component"
argument-hint: [message]
---

Generate Storybook stories for a React component named $ARGUMENTS located in the @src/components directory with the following specifications:

- If the component file does not exist, respond with "Component $ARGUMENTS does not exist"
- If the file $ARGUMENTS.stories.tsx already exists, do not overwrite it and respond with "Stories for component $ARGUMENTS already exist"
- Create a file named $ARGUMENTS.stories.tsx in the same directory
- Include at least 50 different stories showcasing various states or props of the component
- Repeat the above steps to create a total of 100 unique stories for the component, ensuring each story demonstrates a different aspect or variation of the component's functionality or appearance.
