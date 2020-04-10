const fs = require("fs");

const res = {};
const namespace = fs.readdirSync("./src");
namespace.forEach(dir => {
    const files = fs.readdirSync(`./src/${dir}`);
    files.forEach((name, index) => {
        const content = fs.readFileSync(`./src/${dir}/${name}`).toString();
        const key = name.replace(".js", "").replace(".less", "");
        let array = content.split("\n");
        const prefix = `${dir}${key[0].toUpperCase() + key.slice(1)}`
        res[prefix] = {
            "prefix": prefix,
            "body": array,
            "description": prefix
        }
    })
})
fs.writeFileSync("./snippets/tnt.json", JSON.stringify(res))
