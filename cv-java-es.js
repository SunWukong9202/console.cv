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
        {
            "command": "apt-get resume",
            "output": [
                "COMPONENT|input|||apt-get resume",
                "HTML|div|mb-4 text-wrap break-words",
                "HTML|div",
                "Leyendo listas de paquetes|wait",
                "HTML|div",
                "Construyendo árbol de dependencias|wait",
                "HTML|div",
                "Los siguientes NUEVOS paquetes serán instalados:",
                "HTML|div|pl-4",
                "resume",
                "HTML%nestable|div",
                "Obteniendo: ",
                "HTML|span|text-yellow-500",
                "https://github.com/SunWukong9202/cli-resume",
                " resume [12.3 MB]",
                "HTML|div",
                "Descargados 12.3 MB en 1s (12.3 MB/s)",
                "HTML|div",
                "Preparando para desempaquetar .../resume.deb|wait",
                "HTML|div",
                "Desempaquetando cli-resume (1.0-1)|wait",
                "HTML|div",
                "Configurando cli-resume (1.0-1)|wait"
            ] 
        },

        {
            "command": "./java-resume --about_me",
            "output": [
                "COMPONENT|input|||./java-resume --about_me",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "🎓 Hola, soy Santiago, estudiante de Licenciatura en Ciencias de la Computación en la UASLP (graduación esperada: Ene 2026, GPA: 8.0 / 10).",
                "HTML|p",
                "Me apasiona construir cosas y entender cómo funcionan, con una sólida base en hardware y software.",
                "HTML|p",
                "Mi experiencia incluye el desarrollo de sistemas de inventario, plataformas de citas y paneles administrativos durante mi servicio social universitario."
            ]
        },

        {
            "command": "./java-resume --technical-skills",
            "output": [
                "COMPONENT|input|||./java-resume --technical-skills",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Habilidades Técnicas",
                "HTML|ul",
                "HTML|li",
                "⚙️ Java SE, Swing, Hibernate, JPA, conceptos básicos de JDBC",
                "HTML|li",
                "🧑‍💻 Spring (Boot, Data JPA, Security) [en progreso]",
                "🧠 Conceptos: OOP, MVC, REST APIs, Pruebas Unitarias, TDD (Aprendiendo), Patrones de Diseño (Aprendiendo), Diseño Responsivo",
                "HTML|li",
                "💬 Habilidades blandas: Resolución de problemas, Atención al detalle, Comunicación"
            ]
        },

        {
            "command": "./java-resume --projects",
            "output": [
                "COMPONENT|input|||./java-resume --projects",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Obteniendo proyectos|wait",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "⚙️ Ensamblador SIC/XE - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/SICXE target=_blank rel=noopener",
                "repo: assembler",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Ver repositorio",
                "HTML%break|p",
                "HTML|a|text-yellow-500|href=files/SICXE-Installer.exe target=_blank rel=noopener",
                "sicxe_installer.exe",
                "HTML|span|text-gray-400 animate-pulse",
                " <- clic para descargar",
                "HTML%break|p",
                "- Ensamblador de dos pasadas para la arquitectura SIC/XE usando Java + ANTLR4.",
                "HTML|p",
                "- Implementa análisis léxico/sintáctico/semántico, tablas de bloques y símbolos, y generación de archivos objeto.",
                "HTML|p",
                "- Interfaz Swing con FlatLaf: editor con intellisense, carga/guardado de archivos y linking/loading de múltiples programas con vista de tabla de memoria.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.assembler.src) src=videos/assembler.mp4 x-ref=assembler",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📊 Editor de Grafos - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/EditordeGrafos/tree/master/EditordeGrafos target=_blank rel=noopener",
                "repo: editor de grafos",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Ver repositorio",
                "HTML%break|p",
                "- Editor WinForms para grafos dirigidos/no dirigidos con serialización de archivos.",
                "HTML|p",
                "- Algoritmos implementados: Prim, Dijkstra, BFS, DFS, circuitos de Euler.",
                "HTML|p",
                "- Incluye simulación de laberinto con generación aleatoria + búsqueda de caminos con robot.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.graph.src) src=videos/graph-editor.mp4 x-ref=graph",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🎮 Juego en Java (Greenfoot) - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/Locus-Invicta target=_blank rel=noopener",
                "repo: greenfoot game",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Ver repositorio",
                "HTML%break|p",
                "- Juego shooter 2D con tres niveles, enemigos con IA básica, barras de vida y obstáculos.",
                "HTML|p",
                "- Incluye menú de inicio, pantalla de carga simulada y música con opción de silenciar/reproducir.",
                "COMPONENT%break|spin",
                "COMPONENT|video||x-on:click=$dispatch('notify',$refs.greenfoot.src) src=videos/game.mp4 x-ref=greenfoot",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🏓 Juego de Ping Pong (FPGA + VHDL) - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/VHDL-Pong-game target=_blank rel=noopener",
                "repo: pong game",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Ver repositorio",
                "HTML%break|p",
                "HTML|button|text-yellow-500|x-on:click=$dispatch('notify','files/reporte_pong_game.pdf')",
                "reporte",
                "HTML|span|text-gray-400 animate-pulse",
                " <- clic para ver el pdf",
                "HTML%break|p",

                "- Implementado completamente en VHDL con controlador VGA, generación de sonido y controles joystick FPGA-Arduino.",
                "HTML|p",
                "- Aprendizaje de conversión analógica-digital, sincronización de señales VGA y diseño de máquinas de estados."
            ]
        },

        {
            "command": "./java-resume --goodbye",
            "output": [
                "COMPONENT|input|||./java-resume --goodbye",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "🙏 Gracias por tomarse el tiempo de revisar mi currículum.",
                "HTML|p",
                "Estoy muy entusiasmado por la oportunidad de contribuir, aprender y crecer dentro de su equipo. Mis sólidos fundamentos en Java SE, Hibernate y Swing — junto con mi aprendizaje activo del ecosistema Spring — me preparan bien para un puesto de prácticas, trainee o desarrollador junior.",
                "HTML|p",
                "Incluso sin un proyecto terminado en Spring Boot todavía, mi experiencia con proyectos académicos y personales complejos demuestra mi capacidad para enfrentar desafíos y adaptarme rápidamente.",

                "HTML|p",
                "Tengo experiencia práctica construyendo aplicaciones full-stack con Laravel: ",

                "HTML|p",
                "HTML|a|text-yellow-500|href=?cv=cv-laravel&lang=es&just=projects",
                "ir al cv con proyectos web",
                "HTML|span|text-gray-400 animate-pulse",
                " <- clic para ver mis proyectos web",
                "HTML%break|p",

                "En caso de que tenga prisa, aquí están los enlaces a las demos en vivo:",

                "HTML|p",
                "HTML|a|text-yellow-500|href=https://ambigest.up.railway.app/ target=_blank rel=noopener",
                "🌱 Módulo de Gestión Ambiental",
                "HTML|span|text-gray-400 animate-pulse",
                " <- pruébalo online",
                "HTML%break|p",

                "HTML|a|text-yellow-500|href=https://librarysystem.up.railway.app/ target=_blank rel=noopener",
                "📚 Sistema de Gestión Bibliotecaria",
                "HTML|span|text-gray-400 animate-pulse",
                " <- pruébalo online",
                "HTML%break|p",

                "HTML|a|text-yellow-500|href=https://sunwukong9202.github.io/Sorting/ target=_blank rel=noopener",
                "📊 Visualizador de Algoritmos de Ordenamiento",
                "HTML|span|text-gray-400 animate-pulse",
                " <- pruébalo online",
                "HTML%break|p",

                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/Workout-tracker target=_blank rel=noopener",
                "Workout Tracker",
                "HTML|span|text-gray-400 animate-pulse",
                " <- primer proyecto Spring Boot (en proceso, dominé el diseño de BD)",
                "HTML%break|p",

                "Si tiene alguna pregunta o desea saber más, ¡no dude en contactarme!",
                
                "HTML%nestable|p",
                "HTML|a|text-green-400 break-words|href=mailto:azahelsantiagoaguileraaguilar@gmail.com",
                "📧 azahelsantiagoaguileraaguilar@gmail.com",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Clic para enviar correo",
                "HTML%break|p",

                "HTML|a|text-blue-400 break-words|href=https://github.com/SunWukong9202 target=_blank rel=noopener",
                "🔗 github.com/SunWukong9202",
                "HTML|span|text-gray-400 animate-pulse",
                " <- Ver mi perfil en GitHub",
                "HTML%break|p",

                "¡Espero tener noticias suyas pronto! 👋"
            ]
        }
    ]
}

window.cv = cv;