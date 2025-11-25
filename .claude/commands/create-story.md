---
description: "Create a story for a given component"
argument-hint: [message]
---

Generate Storybook stories for a React component named $ARGUMENTS located in the @src/components directory with the following specifications:

- If the component file does not exist, respond with "Component $ARGUMENTS does not exist"
- If the file $ARGUMENTS.stories.tsx already exists, do not overwrite it and respond with "Stories for component $ARGUMENTS already exist"
- Create a file named $ARGUMENTS.stories.tsx in the same directory
- Include at least 5 different stories showcasing various states or props of the component
