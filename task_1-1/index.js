const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


async function main() {
    for await (const ln of rl) {
        console.log(ln.split("").reverse().join(""), "\n");
    }
}

main().catch(console.error);
