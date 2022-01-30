let index = 0

let param = process.argv

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('data3.json', 'utf-8'))
console.log(data)
let id = param[3] - 1


switch (param[2]) {
    case "list":
        console.log("daftar pekerjaan :")
        data.forEach((item, index) => {
            console.log(`${index + 1}. [${item.complete ? 'x' : " "}] ${item.title}`)
        });


        break;
    //menambahkan secara otomatis di terminal
    case "add":

        let title = param.slice(3).join(" ")// dipotong setelah param 3

        const todo = {
            title: title,
            complete: false,
            tag: []
        }
        data.push(todo)

        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    case "delete":

        //ketika menjalankan dengan perintah di terminal node todo.js delet 1 maka salah satu item pada data json akan di hapus

        let deleted = param[3] - 1

        data.splice(deleted, 1)

        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')

        break;

    //node todo.js complete 1

    case "complete":

        let complete = param[3] - 1
        data[complete].status == true

        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    case "list:outstanding":
        console.log("pekerjaan yang belum selesai :")

        if (param[3] == 'asc') {
            for (let i = 0; i < data.length; i++)
                if (!data[i]) console.log(data[i])
            console.log(`${i + 1}. [${data[i].complete ? 'x' : " "}] ${data[i].title}`)
        } else {
            for (let i = data.length - 1; i >= 0; i--)
                if (!data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : " "}] ${data[i].title}`)
        }


        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

        case 'completed':
            if (param[3] == 'asc') {
                data.forEach((item, index) => {
                    if (data[index].status == true) {
                        console.log(`${index + 1}. ${item.status ? '[x]' : '[ ]'} ${item.tugas}`)
                    }
                })
            } else for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].status == true) {
                    // console.log(data[i])
                    console.log(`${i + 1}. ${data[i].status ? '[x]' : '[ ]'} ${data[i].tugas}`)
                }
            }
            break;

            case 'tag':
                let tag = param.slice(3, param.length)
                console.log(tag)
        
                // fs.writeFileSync('todo.json', JSON.stringify(todo), 'utf-8')
                break;
        
    default:

        console.log(">>> JS TODO <<<")
        console.log("$ node todo.js <command>")
        console.log("$ node todo.js list")
        console.log("$ node todo.js task <task_id>")
        console.log("$ node todo.js add <task_content>")
        console.log("$ node todo.js delete <task_id>")
        console.log("$ node todo.js complete <task_id>")
        console.log("$ node todo.js uncomplete<task_id>")
        console.log("$ node todo.js list:outstanding asc|dsc")
        console.log("$ node todo.js list:complited asc|dsc")
        console.log("$ node todo.js tag <task_id> <tag_name_1> <tag_name_2>...<tag_name_N>")
        console.log("$ node todo.js filter:<tag_name>")

        break;
}



// for in object objact { }
// foreach array[]
// data[i] dari 1 
// indek dari 0