let param = process.argv

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('data3.json', 'utf-8'))
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

        data[id].complete = true

        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    case "uncomplete":

        data[id].complete = false

        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    case "list:outstanding":
        console.log("pekerjaan yang belum selesai :")

        if (param[3] == 'asc') {
            for (let i = 0; i < data.length; i++)
                if (!data[i].complete) console.log(data[i])
            console.log(`${i + 1}. [${data[i].complete ? 'x' : " "}] ${data[i].title}`)
        } else {
            for (let i = data.length - 1; i >= 0; i--)
                if (!data[i].complete)
                    console.log(`${i + 1}. [${data[i].complete ? 'x' : " "}] ${data[i].title}`)
        }


        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

    case 'list:completed':
        console.log('Daftar Pekerjaan')
        if (param[3] == 'asc') {
            data.forEach((item, index) => {
                if (data[index].complete == true) {
                    console.log(`${index + 1}. ${item.complete ? '[x]' : '[ ]'} ${item.title}`)
                }
            })
        } else for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].complete == true) {
                // console.log(todo[i])
                console.log(`${i + 1}. ${data[i].complete ? '[x]' : '[ ]'} ${data[i].title}`)
            }
        }
        break;

    case 'tag':
        let tags = param.slice(4, param.length)
        // console.log(tags)
        tags.forEach((item, index) => {
            data[id].tag.push(tags[index])
        });
        // console.log(data[id])
        // data[id].tag.push(tags)
        console.log(`'${tags}' telah ditambahkan ke daftar '${data[id].title}'`)


        fs.writeFileSync('data3.json', JSON.stringify(data, null, 3), 'utf-8')
        break;

        default:

            if (!param[2] || param[2] == 'help') {
                console.log('>>>JS TODO<<<')
                console.log('$ node todo.mjs <command>')
                console.log('$ node todo.mjs list')
                console.log('$ node todo.mjs task <task_id>')
                console.log('$ node todo.mjs add <task content>')
                console.log('$ node todo.mjs delete <task_id>')
                console.log('$ node todo.mjs complete <task_id>')
                console.log('$ node todo.mjs uncomplete <task_id>')
                console.log('$ node todo.mjs list:outstanding asc|desc')
                console.log('$ node todo.mjs list:completed asc|desc')
                console.log('$ node todo.mjs tag <task_id> <tag_name_1> <tag_name_2> . . . <tag_name_N>')
                console.log('$ node todo.mjs filter:<tag_name>')
            }
            else {
                console.log('Daftar Pekerjaan')
                let filter = param[2].split(':')[1]
                //console.log(filter)
                data.forEach((item, index) => {
                    if (data[index].tag.includes(filter)) {
                        console.log(`${index + 1}. ${item.complete ? '[x]' : '[ ]'} ${item.title}`)
                    }
                })
            };
    
            break;
    
    }