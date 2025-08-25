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
        },
        "video": {
            "schema": [
                "HTML|div|relative max-w-md md:max-w-lg lg:max-w-xl mb-4 text-black group cursor-pointer|x-data={}",
                "HTML|div|absolute bottom-1/2 left-1/2 group-hover:inline-flex hidden bg-black/70 text-white p-1 rounded-md",
                "HTML|i|fa-solid fa-2x fa-circle-play group-hover:inline-block cursor-pointer",
                "HTML%break-2|video|controls"
            ]
        }

    },

    "resume" : [
        // {
        //     "command": "apt-get resume",
        //     "output": [
        //         "COMPONENT|input|||apt-get resume",
        //         "HTML|div|mb-4 text-wrap break-words",
        //         "HTML|div",
        //         "Reading package lists|wait",
        //         "HTML|div",
        //         "Building dependency tree|wait",
        //         "HTML|div",
        //         "The following NEW packages will be installed:",
        //         "HTML|div|pl-4",
        //         "resumes",
        //         "HTML%nestable|div",
        //         "Get: ",
        //         "HTML|span|text-yellow-500",
        //         "https://github.com/SunWukong9202/resume",
        //         " resume [12.3 MB]",
        //         "HTML|div",
        //         "Fetched 12.3 MB in 1s (12.3 MB/s)",
        //         "HTML|div",
        //         "Preparing to unpack .../resume.deb|wait",
        //         "HTML|div",
        //         "Unpacking resume (1.0-1)|wait",
        //         "HTML|div",
        //         "Setting up resume (1.0-1)|wait"
        //     ] 
        // },

        // {
        //     "command": "./java-resume --about_me",
        //     "output": [
        //         "COMPONENT|input|||./java-resume --about_me",
        //         "HTML|div|mb-4 flex flex-col justify-between gap-4",
        //         "HTML|p",
        //         "🎓 Hi, I'm Santiago, a Bachelor of Computer Science student at UASLP (expected graduation: Jan 2026, GPA: 8.0 / 10).",
        //         "HTML|p",
        //         "I'm passionate about building things and learning how they work, with a strong foundation in both hardware and software.",
        //         "HTML|p",
        //         "My experience includes working on inventory systems, appointment platforms, and admin dashboards during my university social service.",
        //     ]
        // },

        // {
        //     "command": "./java-resume --technical-skills",
        //     "output": [
        //         "COMPONENT|input|||./java-resume --technical-skills",
        //         "HTML|div|mb-4 flex flex-col justify-between gap-4",
        //         "HTML|h4",
        //         "Technical Skills",
        //         "HTML|ul",
        //         "HTML|li",
        //         "⚙️ Java SE, Swing, Hibernate, JPA, JDBC basics",
        //         "HTML|li",
        //         "🧑‍💻 Spring (Boot, Data JPA, Security) [in progress]",
        //         "🧠 Concepts: OOP, MVC, REST APIs, Unit Testing, TDD (Learning), Design Patterns (Learning), Responsive Design",
        //         "HTML|li",
        //         "💬 Soft Skills: Problem-solving, Attention to detail, Communication"
        //     ]
        // },

        {
            "command": "./java-resume --projects",
            "output": [
                "COMPONENT|input|||./java-resume --projects",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Fetching projects|wait",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "⚙️ SIC/XE Assembler - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/Assembler target=_blank rel=noopener",
                "repo: assembler",
                "HTML|span|text-gray-400 animate-pulse",
                " <- View repo",
                "HTML%break|p",
                "HTML|a|text-yellow-500|href=files/SICXE-Installer.exe target=_blank rel=noopener",
                "sicxe_installer.exe",
                "HTML|span|text-gray-400 animate-pulse",
                " <- click to download",
                "HTML%break|p",
                "- Two-pass assembler for the SIC/XE architecture using Java + ANTLR4.",
                "HTML|p",
                "- Implements lexical/syntactic/semantic analysis, block & symbol tables, and object file generation.",
                "HTML|p",
                "- Swing UI with FlatLaf: editor with intellisense, file load/save, and linking/loading of multiple programs with memory table view.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.assembler.src) src=videos/assembler.mp4 x-ref=assembler",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📊 Graph Editor - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/winforms-projects/tree/main/EditordeGrafos/EditordeGrafos target=_blank rel=noopener",
                "repo: graph editor",
                "HTML|span|text-gray-400 animate-pulse",
                "<- View repo",
                "HTML%break|p",
                "- WinForms editor for directed/undirected graphs with file serialization.",
                "HTML|p",
                "- Algorithms implemented: Prim, Dijkstra, BFS, DFS, Euler circuits.",
                "HTML|p",
                "- Includes labyrinth simulation with random generation + robot pathfinding.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.graph.src) src=videos/graph-editor.mp4 x-ref=graph",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🎮 Java Game (Greenfoot) - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/greenfoot-game target=_blank rel=noopener",
                "repo: greenfoot game",
                "HTML|span|text-gray-400 animate-pulse",
                "<- View repo",
                "HTML%break|p",
                "- 2D shooter game with three levels, enemies with simple AI, health bars, and obstacles.",
                "HTML|p",
                "- Features start menu, simulated loading screen, and music with mute/play toggle.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.greenfoot.src) src=videos/game.mp4 x-ref=greenfoot",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🏓 Ping Pong Game (FPGA + VHDL) - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/pong-vhdl target=_blank rel=noopener",
                "repo: pong game",
                "HTML|span|text-gray-400 animate-pulse",
                "<- View repo",
                "HTML%break|p",
                "- Implemented fully in VHDL with VGA controller, sound generation, and FPGA-to-Arduino joystick controls.",
                "HTML|p",
                "- Learned analog-to-digital conversion, VGA signal timing, and state machine design.",
                "HTML|p",
                "- Produced a detailed engineering report documenting the project."
            ]
        },


        {
            "command": "./java-resume --goodbye",
            "output": [
                "COMPONENT|input|||./java-resume --goodbye",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "🙏 Thank you for taking the time to review my resume.",
                "HTML|p",
                "I'm eager to contribute, learn, and grow as part of your team. My strong foundations in Java SE, Hibernate, and Swing — along with my active learning of the Spring ecosystem — make me well-prepared for an internship, trainee, or junior Java developer role.",
                "HTML|p",
                "Even without a finished Spring Boot project yet, my experience with complex academic and personal projects shows my ability to handle challenges and adapt quickly.",
                "HTML|p",
                "If you have any questions or would like to know more, feel free to reach out!",
                "HTML|p",
                "HTML|a|text-green-400 break-words|href=mailto:azahelsantiagoaguileraaguilar@gmail.com",
                "📧 azahelsantiagoaguileraaguilar@gmail.com",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Click to send an email",
                "HTML|p",
                "HTML|a|text-blue-400 break-words|href=https://github.com/SunWukong9202 target=_blank rel=noopener",
                "🔗 github.com/SunWukong9202",
                "HTML|span|text-gray-400 animate-pulse",
                "<- View my GitHub profile",
                "HTML|p",
                "Hope to hear from you soon! 👋",
                "COMPONENT%break|spin"
            ]
        }

    ]
}

window.cv = cv;