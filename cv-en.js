// export default 

const cv = {
    "components": {
        "input": {
            "schema": [
                "HTML|div|flex my-4",
                "HTML|span|text-green-400",
                "santiago:~$",
                "HTML|p|flex-1 typing items-center pl-2"
            ]
        },
        "img": {
            "schema": [
                "HTML|div|relative w-full max-w-screen-sm max-h-max mb-4 text-black group cursor-pointer|x-data={}",
                "HTML|div|absolute bottom-2 left-2 group-hover:inline-flex hidden bg-black/70 text-white p-1 rounded-md",
                "HTML|i|fa-solid fa-expand group-hover:inline-block cursor-pointer",
                "HTML%break-2|img"
            ]
        },
        "spin": {
            "schema": [
                "HTML|div|my-8 px-8 flex items-center justify-center",
                "HTML|div|animate-spin size-6 border-[3px] border-current mb-4 border-t-transparent text-yellow-500 rounded-full",
                "HTML|span|sr-only",
                "Loading..."
            ]
        }
    },

    "resume" : [
        {
            "command": "apt-get resume",
            "output": [
                "COMPONENT|input|||apt-get resume",
                "HTML|div|mb-4 text-wrap break-words",
                "HTML|div",
                "Reading package lists|wait",
                "HTML|div",
                "Building dependency tree|wait",
                "HTML|div",
                "The following NEW packages will be installed:",
                "HTML|div|pl-4",
                "resumes",
                "HTML%nestable|div",
                "Get: ",
                "HTML|span|text-yellow-500",
                "https://github.com/SunWukong9202/resume",
                " resume [12.3 MB]",
                "HTML|div",
                "Fetched 12.3 MB in 1s (12.3 MB/s)",
                "HTML|div",
                "Preparing to unpack .../resume.deb|wait",
                "HTML|div",
                "Unpacking resume (1.0-1)|wait",
                "HTML|div",
                "Setting up resume (1.0-1)|wait"
            ] 
        },

        {
            "command": "./dotnet-resume --about_me",
            "output": [
                "COMPONENT|input|||./resume --about_me",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "I'm Azahel Santiago Aguilera Aguilar a current bachelor of computer science in the Autonomous University of San Luis Potosi in SLP, Mexico.",
                "HTML|p",
                "I'm currently in the search of an intership and interested in the one you will be holding.",
                "HTML|ul",
                "HTML|li",
                "Expected Graduation: January 2025",
                "HTML|li",
                "Relevant Coursework: Data Structures, Algorithms, Web Development",
                "HTML|li",
                "GPA: 8.0/10"
            ]
        },

        {
            "command": "./dotnet-resume --technical-skills",
            "output": [
                "COMPONENT|input|||./resume --technical-skills",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Technical Skills",
                "HTML|ul",
                "HTML|li", 
                "Programming Languages: PHP, JavaScript, C#",
                "HTML|li",
                "Frameworks and Libraries: Livewire, Laravel, Alpine, Vue",
                "HTML|li",
                "CSS Frameworks: Tailwind, Bootstrap",
                "HTML|li",
                "Tools and Technologies: Git",
                "HTML|li",
                "Soft Skills: Problem Solving, Attention to detail and Communication"
            ]
        },

        {
            // "command": "./dotnet-resume --projects",
            "output": [
                "COMPONENT|input|||./resume --projects",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|div",
                "HTML|h4",
                "Projects ",
                // "HTML|p",
                // "Note: All this project's UI were made with winforms designer",
                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "Graph Editor - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/winforms-projects/tree/main/EditordeGrafos/EditordeGrafos",
                "repo:graph editor  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and see my repo",
                "HTML%break|p",
                "- Winforms based application able to crud nodes and edges to build graphs to which then can be applied some algorithms(prim, dijkstra) and other routines (DFS, BFS, Search of Eulerian circuits, etc). Also these graphs can be serialized to files to save them.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.graph.src) src=images/graph_editor.png x-ref=graph",
                // "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "Laberynth Simulation - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/winforms-projects/blob/main/EditordeGrafos/EditordeGrafos/EditordeGrafos/Laberinto.cs",
                "repo:laberynth  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and see my repo",
                "HTML%break|p",
                "- Winforms based application with pseudo aleatory laberynth generation which use dijkstra algorithm to find the shortest path throught a route of one or various points selected by the user all with animations of route generation and character movement.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.lab.src) src=images/laberynth.png x-ref=lab",
                // "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "B+ Tree CRUD persisted with Binary Files - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/winforms-projects/tree/main/FilesWithBPluesTree/FilesWithBPluesTree",
                "repo:bplus tree  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and see my repo",
                "HTML%break|p",
                "- Winforms UI to show to in real time the actions made against the file which represents the tree",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.bplus.src) src=images/bplus.png x-ref=bplus",
                // "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "Hash Table CRUD persisted with Binary Files - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/winforms-projects/tree/main/BinaryHash",
                "repo:hash table  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and see my repo",
                "HTML%break|p",
                "- Winforms UI provided to show the actions made against the hash table",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.hash.src) src=images/hash.png x-ref=hash",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "Atmega 328p Real Time Clock - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/atmega328p.clock",
                "repo:atmega RTC  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and see my repo",
                "HTML%break|p",
                "This project is made of the following programs",
                "HTML|p",
                "- Winforms UI provided to sync and show the passage of time along with some controls which in turn send commands to the microcontroller. Background thread make the serial communication(UASRT) and forward the commands to avoid UI to stop responding.",
                "HTML|p",
                "- Avr gcc assembly program running in the microcontroller using interruptions to send the elapsed time and receive the UI commands all over serial communication (USART).",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.rtc.src) src=images/rtc.png x-ref=rtc",
                "HTML%nestable|p",
                "- Some UI actions provided:",
                "HTML|ul|ml-2",
                "HTML|li",
                "Count down",
                "HTML|li",
                "Count Up",
                "HTML|li",
                "Sync With  PC timer",
                "HTML|li",
                "Stop/Play",
                "HTML%break-2|div|my-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "Sorting Algorithms Website - ",
                "HTML|a|text-yellow-500|href=https://sunwukong9202.github.io/Sorting/",
                "sorting: live site  ",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Go ahead and play a little",
                "HTML%break|p",
                "- Vue js based project with implementations of some sorting algorithms with the purpose of measure and compare their performance.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.sorting.src) src=images/sorting.png x-ref=sorting",

                
            ]
        }
    ]
}

window.cv = cv;