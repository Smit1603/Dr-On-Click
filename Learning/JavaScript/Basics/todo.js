let input = prompt("What would you like to do?")
const todos = ['Complete Assignments', 'Complete homework']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('************************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('************************')
    }
    else if (input === 'new') {
        const newTodo = prompt('Enter new ToDo!')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Ok, Enter an Index to delete'))

        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted ${deleted[0]}`)
        }
        else{
            console.log('Unknown Index')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("OK QUIET THE APP!!")