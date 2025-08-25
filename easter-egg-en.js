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
                "Loading..."
            ]
        }
    },

    "resume": [
        {
            "command": "sudo apt-get install fun",
            "output": [
                "COMPONENT|input|||sudo apt-get install fun",
                "HTML|div",
                "Reading package lists...|wait",
                "HTML|div",
                "Summoning dragons...|wait",
                "HTML|div",
                "Installing memes (version 9k)...|wait",
                "HTML|div",
                "Done!"
            ]
        },

        {
            "command": "./fun --secret-identity",
            "output": [
                "COMPONENT|input|||./resume --secret-identity",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|p",
                "Turns out Santiago has a hidden superpower:",
                "HTML|p",
                "Can debug code just by glaring at the screen 👀",
                "HTML|p",
                "Also known to summon Stack Overflow answers before even typing the question."
            ]
        },

        {
            "command": "./fun --skills-legendary",
            "output": [
                "COMPONENT|input|||./resume --skills --legendary",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|h4",
                "Legendary Skills",
                "HTML|ul",
                "HTML|li",
                "Master of turning ☕ into code",
                "HTML|li",
                "Certified Keyboard Warrior (WPM over 100+)",
                "HTML|li",
                "Can CSS center a div on the first try",
                "HTML|li",
                "Dark mode enthusiast 🌙",
                "HTML|li",
                "Debug whisperer (sometimes talks to rubber ducks)"
            ]
        },

        {
            "command": "./run --final-boss",
            "output": [
                "COMPONENT|input|||./resume --final-boss",
                "HTML|div|mb-4 flex flex-col gap-2",
                "HTML|p",
                "WARNING: You have encountered the Final Boss Interview.",
                "HTML|p",
                "Required skills: Algorithms, System Design, and the courage to explain recursion without crying.",
                "HTML|p",
                "Santiago rolls a d20... 🎲",
                "HTML|p",
                "It's a natural 20. Critical success! 🎉",
                "HTML|div",
                "Job unlocked: Software Engineer 🚀"
            ]
        }
    ]
};

window.cv = cv;
