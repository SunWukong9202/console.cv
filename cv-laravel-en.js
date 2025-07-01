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
            "command": "./laravel-resume --about_me",
            "output": [
                "COMPONENT|input|||./laravel-resume --about_me",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "Hi, I'm Azahel Santiago Aguilera Aguilar, a final-year Computer Science student at the Autonomous University of San Luis Potosí (UASLP), Mexico.",
                "HTML|p",
                "I'm passionate about backend development and web technologies, especially within the Laravel ecosystem. Currently seeking a junior developer role or internship where I can contribute, learn, and grow alongside a professional team.",
                "HTML|p",
                "My experience includes building full-stack web applications with Laravel, Livewire, and Tailwind CSS, as well as working on inventory systems, appointment platforms, and admin dashboards during my university internship.",
                "HTML|ul",
                "HTML|li",
                "📅 Expected Graduation: January 2025",
                "HTML|li",
                "🎓 Relevant Coursework: Data Structures, Algorithms, Web Development",
                "HTML|li",
                "📈 GPA: 8.0 / 10"
            ]
        },

        {
            "command": "./laravel-resume --technical-skills",
            "output": [
                "COMPONENT|input|||./laravel-resume --technical-skills",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Technical Skills",
                "HTML|ul",
                "HTML|li",
                "🧑‍💻 Languages: PHP, JavaScript, HTML, CSS, C#",
                "HTML|li",
                "⚙️ Frameworks & Libraries: Laravel, Livewire, Filament, Vue.js, Alpine.js",
                "HTML|li",
                "🎨 Styling: Tailwind CSS, Bootstrap",
                "HTML|li",
                "🛠️ Tools & Platforms: Git, MySQL, SQL Server, CLI, Linux",
                "HTML|li",
                "🧠 Concepts: OOP, MVC, REST APIs, Unit Testing, TDD (Learning), Design Patterns (Learning), Responsive Design",
                "HTML|li",
                "💬 Soft Skills: Problem-solving, Attention to detail, Communication"
            ]
        },

        {
            "command": "./laravel-resume --projects",
            "output": [
                "COMPONENT|input|||./laravel-resume --projects",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Highlighted Projects",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🌱 Environmental Management Module - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/agendaambiental target=_blank rel=noopener",
                "repo: agenda ambiental",
                "HTML|span|text-gray-400 animate-pulse",
                "<- View repo",
                "HTML%break|p",
                "HTML|a|text-yellow-500|href=https://drive.google.com/file/d/1cTdLPHX7NK1F6Q6jjGSEYlSZUXcoYCbg/view?usp=drive_link target=_blank rel=noopener",
                "app user manual",
                "HTML|span|text-gray-400 animate-pulse",
                "<- See the user manual",
                "HTML%break|p",
                "- Full-stack Laravel system for Agenda Ambiental (UASLP) to manage recycling events, donation tracking, and providers.",
                "HTML|p",
                "- Includes inventory, role-based access, donation workflows, admin dashboard (Filament), and notifications.",
                "HTML|p",
                "- Delivered complete SRS, integration/unit tests, and user documentation.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.agenda.src) src=images/managment_module.png x-ref=agenda",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📚 Library Management System - ",
                "HTML|a|text-yellow-500|href=https://librarysystem.up.railway.app/ target=_blank rel=noopener",
                "live demo",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Try it online",
                "HTML%break|p",
                "- Laravel + Livewire app for managing books, lending, and returns with ISBN checksum validation.",
                "HTML|p",
                "- Role-based access (Admin, Librarian, Student) and dashboards for top books and readers.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.library.src) src=images/library-system.png x-ref=library",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📊 Sorting Algorithm Visualizer - ",
                "HTML|a|text-yellow-500|href=https://sunwukong9202.github.io/Sorting/ target=_blank rel=noopener",
                "live site",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Try it out",
                "HTML%break|p",
                "- Vue.js web app that visualizes sorting algorithms in real time.",
                "HTML|p",
                "- Side-by-side benchmarking with adjustable speed, size, and selected algorithm.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.sorting.src) src=images/sorting.png x-ref=sorting"
            ]
        },

        {
            "command": "./laravel-resume --goodbye",
            "output": [
                "COMPONENT|input|||./laravel-resume --goodbye",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "🙏 Thank you for taking the time to review my resume.",
                "HTML|p",
                "I'm truly excited about the opportunity to contribute, learn, and grow within your team. My passion for web development and hands-on experience with Laravel make me a strong candidate for a junior position or internship.",
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