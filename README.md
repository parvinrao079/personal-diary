# Personal Diary

This project is a part of the Full Stack Web & App Bootcamp at [WBS Coding School](https://www.wbscodingschool.com/). The goal of this project was to create an interactive web application, where user can "add entries" to make the personal diary as their personal journal. Besides that, this is a group project which was successfully done by 3 colleagues including myself.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
  - [Homepage](#homepage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Learning Outcomes](#learning-outcomes)
- [Useful Resources](#useful-resources)
- [Team Members](#team-members)
- [Disclaimer](#disclaimer)

## Project Overview

The Personal Diary project involves creating an interactive web application that allows user to create their personal journal entries, to edit these created entries and to delete the created entries. This project mainly emphasises individual and group development, code management via GitHub, improving React skills, designing skills and enhancing Javascript skills in a browser level environment. 

## Features

### Homepage

- User can add entrries to the journal by interacting with the "Add Entry" button
- A form will then pop up upon interacting with the "Add Entry" button.
- It is required to fill up everything in the form. If the form is not completely filled up OR halfway-filled-up, the entries won't be saved.
- Upon filling up the form, user can interact with the "save" button to save the entry and it will automatically show up in the homepage.
- It is also good to take note that, only one entry is allowed per day.
- User can however, "edit" / "delete" the entry that is OR was created.
- User can also interact with multiple styling buttons in the website. For example, user can decide whether they want dark mode / light mode. User can also decide whether they want to have a grd-view of their entries or a timeline-view

## Technologies Used

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-black?style=flat-square&logo=react&logoColor=blue" />
  <img alt="Vite" src="https://img.shields.io/badge/-Vite-black?style=flat-square&logo=vite&logoColor=gold" />
  <img alt="DaisyUI" src="https://img.shields.io/badge/-DaisyUI-black?style=flat-square&logo=daisyui&logoColor=gold&logoHeight=40" />
  <img alt="Figma" src="https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma&logoColor=white" />
</p>

## Project Structure

```
personal-diary/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CardLayouts/
│   │   │   ├── Grid.jsx
│   │   │   ├── Timeline.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   ├── MainContent/
│   │   │   ├── Journal.jsx
│   │   ├── Modals/
│   │   │   ├── AlreadyAddedModal.jsx
│   │   │   ├── EditEntryModal.jsx
│   │   │   ├── EntryModal.jsx
│   │   │   ├── NewEntryModal.jsx
│   │   │   ├── index.jsx
│   ├── Navbar/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .editorconfig
├── .eslint.config.js
├── .gitignore
├── .prettierrc
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Learning Outcomes

Throughout this project, we gained valuable experience and skills in the following areas:

- Working with team and individually
- Managing codes and version control via GitHub and Git version control
- Honed skills in React development, specifically by orgianizing the components
- Honed javascript skills
- Managing state using localStorage and also retrieving information from the localStorage
- Improved skills in the usage of Figma to plan and design the website
- Usage of Daisy UI to improve the quality of the website

## Useful Resources

- [GitHub Intro](https://guides.github.com/introduction/flow/)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [NPM Documentation](https://www.npmjs.com/)
- [DaisyUI Documentation](https://daisyui.com/components/)
- [React Documentation](https://react.dev/reference/react)
- [Figma Documentation](https://help.figma.com/hc/en-us)
- [Vite Documentation](https://vitejs.dev/guide/)

## Team Members

- [Parvin](https://github.com/parvinrao079)
- [Tima Talyatov](https://github.com/timataliatov)
- [Lisa](https://github.com/orangethief)
- [Alexandru-Daniel Nedelcu](https://github.com/adnedelcu)

## Disclaimer

This project is created for educational purposes as part of the WBS Coding School Bootcamp.



