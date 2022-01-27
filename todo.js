
let param = process.argv

const fs = require('fs')
if (!process.argv[2]) {
    console.log("tolong sertakan inputan nama filenya")
}
let data = JSON.parse(fs.readFileSync('data3.json', 'utf-8'))
console.log(data)


switch (param[2]) {
    case "list":
        data.forEach((item, index) => {
            console.log(`${index + 1}. [${item.complite ? "x" : " "}] ${item.title}`)
        });

    case "add":

        let title = process.argv.slice(3).join(' ')
        console.log(title)
        let newData = {
            title: title,
            complite: false,
            tag: []
        }
        data.push((newData))
        fs.writeFileSync('data3.json', JSON.stringify(data), 'utf-8')


    case "delete":

        let deleted = param[3] - 1
        data.splice(deleted, 1)
        console.log(data)

    

        break;
    default:
        // console.log(">>> JS TODO <<<")
        // console.log("$ node todo.js <command>")
        // console.log("$ node todo.js list")
        // console.log("$ node todo.js task <task_id>")
        // console.log("$ node todo.js add <task_content>")
        // console.log("$ node todo.js delete <task_id>")
        // console.log("$ node todo.js complite <task_id>")
        // console.log("$ node todo.js uncomplite <task_id>")
        // console.log("$ node todo.js list:outstanding asc|dsc")
        // console.log("$ node todo.js list:complited asc|dsc")
        // console.log("$ node todo.js tag <task_id> <tag_name_1> <tag_name_2>...<tag_name_N>")
        // console.log("$ node todo.js filter:<tag_name>")

        break;
}



//for in object objact {}
// foreach array []
// item dari 1 
// indek dari 0
