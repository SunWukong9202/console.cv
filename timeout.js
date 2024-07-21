let sequence = [
    "hello",
    "BRANCH",
    "world!",
    "how are you?"
];

let branch = [
    'inside',
    'branch 2'
]

function init(index) 
{
    console.log(`Execution ${index}`);

    if(index < sequence.length)
    {
        doWork(sequence[index], 0, () => setTimeout(() => init(++index), 100));
    }
}

function doWork(str, char, next, prevent = false)
{
    if(str == "BRANCH" && !prevent) {
        setTimeout(() => doWork(branch.reverse().pop(), 0, function repeat() {
            if(branch.length > 0)
            {
                setTimeout(() => doWork(branch.reverse().pop(), 0, repeat))
            }
            else{
                console.log("c: "+ str, char, next);

                setTimeout(() => doWork(str, char, next, true), 100)
            }
        }), 100);

        return;
    }

    if(char < str?.length ?? true)
    {
        console.log(str.substring(0, char + 1));

        setTimeout(() => doWork(str, ++char, next, true), 100);
    }
    else {
        next();
    }
}

init(0);