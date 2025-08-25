// export default

const cv_es = {
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
                "Cargando..."
            ]
        }
    },

    "resume": [
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
                "Se instalarán los siguientes NUEVOS paquetes:",
                "HTML|div|pl-4",
                "resumes",
                "HTML%nestable|div",
                "Descargando: ",
                "HTML|span|text-yellow-500",
                "https://github.com/SunWukong9202/resume",
                " resume [12.3 MB]",
                "HTML|div",
                "Descargado 12.3 MB en 1s (12.3 MB/s)",
                "HTML|div",
                "Preparando para desempaquetar .../resume.deb|wait",
                "HTML|div",
                "Desempaquetando resume (1.0-1)|wait",
                "HTML|div",
                "Configurando resume (1.0-1)|wait"
            ]
        },

        {
            "command": "./laravel-resume --about_me",
            "output": [
                "COMPONENT|input|||./laravel-resume --about_me",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|p",
                "Hola, soy Azahel Santiago Aguilera Aguilar, estudiante de último semestre en la carrera de Ciencias de la Computación en la Universidad Autónoma de San Luis Potosí (UASLP), México.",
                "HTML|p",
                "Me apasiona el desarrollo backend y las tecnologías web, especialmente dentro del ecosistema Laravel. Actualmente busco una oportunidad como desarrollador junior o prácticas profesionales donde pueda aprender, contribuir y crecer junto a un equipo profesional.",
                "HTML|p",
                "Tengo experiencia desarrollando aplicaciones web full-stack con Laravel, Livewire y Tailwind CSS, y he trabajado en sistemas de inventario, plataformas de citas y paneles administrativos durante mi estancia de prácticas universitarias.",
                "HTML|ul",
                "HTML|li",
                "📅 Fecha estimada de graduación: Enero 2026",
                "HTML|li",
                "🎓 Materias relevantes: Estructuras de Datos, Algoritmos, Desarrollo Web",
                "HTML|li",
                "📈 Promedio: 8.0 / 10"
            ]
        },

        {
            "command": "./laravel-resume --technical-skills",
            "output": [
                "COMPONENT|input|||./laravel-resume --technical-skills",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Habilidades Técnicas",
                "HTML|ul",
                "HTML|li",
                "🧑‍💻 Lenguajes: PHP, JavaScript, HTML, CSS, C#",
                "HTML|li",
                "⚙️ Frameworks y Librerías: Laravel, Livewire, Filament, Vue.js, Alpine.js",
                "HTML|li",
                "🎨 Estilos: Tailwind CSS, Bootstrap",
                "HTML|li",
                "🛠️ Herramientas y Plataformas: Git, MySQL, SQL Server, CLI, Linux",
                "HTML|li",
                "🧠 Conceptos: OOP, MVC, APIs REST, Pruebas Unitarias, TDD (en aprendizaje), Patrones de Diseño (en aprendizaje), Diseño Responsivo",
                "HTML|li",
                "💬 Habilidades blandas: Resolución de problemas, Atención al detalle, Comunicación"
            ]
        },

        {
            "command": "./laravel-resume --projects",
            "output": [
                "COMPONENT|input|||./laravel-resume --projects",
                "HTML|div|mb-4 flex flex-col justify-between gap-4",
                "HTML|h4",
                "Proyectos Destacados",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "🌱 Módulo de Gestión Ambiental - ",
                "HTML|a|text-yellow-500|href=https://github.com/SunWukong9202/agendaambiental target=_blank rel=noopener",
                "repo: agenda ambiental",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Ver repositorio",
                "HTML%break|p",
                "HTML|a|text-yellow-500|href=https://drive.google.com/file/d/1cTdLPHX7NK1F6Q6jjGSEYlSZUXcoYCbg/view?usp=drive_link target=_blank rel=noopener",
                "manual de usuario",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Ver el manual",
                "HTML%break|p",
                "- Sistema Laravel full-stack para la Agenda Ambiental (UASLP) para gestionar eventos de reciclaje, donaciones y proveedores.",
                "HTML|p",
                "- Incluye inventario, acceso por roles, flujos de donaciones, panel administrativo (Filament) y notificaciones.",
                "HTML|p",
                "- Se entregó con documentación, pruebas de integración y manuales.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.agenda.src) src=images/managment_module.png x-ref=agenda",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📚 Sistema de Gestión Bibliotecaria - ",
                "HTML|a|text-yellow-500|href=https://librarysystem.up.railway.app/ target=_blank rel=noopener",
                "demo en vivo",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Probar en línea",
                "HTML%break|p",
                "- Aplicación Laravel + Livewire para gestionar libros, préstamos y devoluciones con validación de ISBN.",
                "HTML|p",
                "- Acceso por roles (Administrador, Bibliotecario, Estudiante) y paneles con estadísticas de lectura.",
                "COMPONENT%break|spin",
                "COMPONENT|img||x-on:click=$dispatch('notify',$refs.library.src) src=images/library-system.png x-ref=library",

                "HTML%break-2|div|mb-4 flex flex-col justify-between gap-4",
                "HTML%nestable|p",
                "📊 Visualizador de Algoritmos de Ordenamiento - ",
                "HTML|a|text-yellow-500|href=https://sunwukong9202.github.io/Sorting/ target=_blank rel=noopener",
                "sitio en vivo",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Probarlo",
                "HTML%break|p",
                "- Web app en Vue.js que visualiza en tiempo real distintos algoritmos de ordenamiento.",
                "HTML|p",
                "- Comparación lado a lado con control de velocidad, tamaño y algoritmo seleccionado.",
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
                "🙏 Gracias por tomarte el tiempo para revisar mi currículum.",
                "HTML|p",
                "Estoy realmente entusiasmado con la posibilidad de contribuir, aprender y crecer junto a su equipo. Mi pasión por el desarrollo web y mi experiencia con Laravel me convierten en un buen candidato para un puesto junior o de prácticas.",
                "HTML|p",
                "Si tienes preguntas o te gustaría conocer más, no dudes en contactarme.",
                "HTML|p",
                "HTML|a|text-green-400 break-words|href=mailto:azahelsantiagoaguileraaguilar@gmail.com",
                "📧 azahelsantiagoaguileraaguilar@gmail.com",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Haz clic para enviar un correo",
                "HTML|p",
                "HTML|a|text-blue-400 break-words|href=https://github.com/SunWukong9202 target=_blank rel=noopener",
                "🔗 github.com/SunWukong9202",
                "HTML|span|text-gray-400 animate-pulse",
                "<- Ver perfil de GitHub",
                "HTML|p",
                "¡Espero tener noticias tuyas pronto! 👋",
                "COMPONENT%break|spin"
            ]
        }

    ]
};

window.cv = cv_es;
