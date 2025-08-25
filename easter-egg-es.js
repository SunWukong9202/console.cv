// cv-laravel-easter.js

const cv = {
    "components": {
        "input": {
            "schema": [
                "HTML|div|flex my-4",
                "HTML|span|text-green-400",
                "easter-egg:~$",
                "HTML|p|flex-1 typing items-center pl-2"
            ]
        },
        "spin": {
            "schema": [
                "HTML|div|my-8 px-8 flex items-center justify-center",
                "HTML|div|animate-spin size-6 border-[3px] border-current mb-4 border-t-transparent text-pink-500 rounded-full",
                "HTML|span|sr-only",
                "Cargando..."
            ]
        }
    },

    "resume": [
        {
            "command": "sudo apt-get install fun",
            "output": [
                "COMPONENT|input|||sudo apt-get install diversion",
                "HTML|div",
                "Leyendo listas de paquetes...|wait",
                "HTML|div",
                "Invocando dragones...|wait",
                "HTML|div",
                "Instalando memes (versión 9k)...|wait",
                "HTML|div",
                "¡Listo!"
            ]
        },

        {
            "command": "./fun --secret-identity",
            "output": [
                "COMPONENT|input|||./resume --identidad-secreta",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|p",
                "Resulta que Santiago tiene un superpoder oculto:",
                "HTML|p",
                "Puede depurar código solo con mirar la pantalla 👀",
                "HTML|p",
                "También se le conoce por invocar respuestas de Stack Overflow antes de escribir la pregunta."
            ]
        },

        {
            "command": "./fun --skills-legendary",
            "output": [
                "COMPONENT|input|||./resume --habilidades --legendarias",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|h4",
                "Habilidades Legendarias",
                "HTML|ul",
                "HTML|li",
                "Maestro en convertir ☕ en código",
                "HTML|li",
                "Guerrero del Teclado Certificado (más de 100+ PPM)",
                "HTML|li",
                "Capaz de centrar un div en CSS al primer intento",
                "HTML|li",
                "Entusiasta del modo oscuro 🌙",
                "HTML|li",
                "Susurrador de bugs (a veces habla con patitos de goma)"
            ]
        },

        {
            "command": "./fun --final-boss",
            "output": [
                "COMPONENT|input|||./resume --jefe-final",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|p",
                "⚠️ ADVERTENCIA: Te has encontrado con la Entrevista del Jefe Final.",
                "HTML|p",
                "Habilidades requeridas: Algoritmos, Diseño de Sistemas y el valor para explicar recursión sin llorar.",
                "HTML|p",
                "Santiago lanza un d20... 🎲",
                "HTML|p",
                "Es un 20 natural. ¡Éxito crítico! 🎉",
                "HTML|div",
                "Trabajo desbloqueado: Ingeniero de Software 🚀"
            ]
        }
    ]
};

window.cv = cv;
