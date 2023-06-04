// import { v4 as uuidV4 } from "uuid"
//
// type Task = {
//     id: string,
//     title: string,
//     completed: boolean,
//     createdAt: Date
// }
//
// const list = document.querySelector<HTMLUListElement>('#list')
// const form  = document.querySelector<HTMLFormElement>('#new-task-form')
// const input = document.getElementById('next-task-title') as HTMLInputElement
//
// const tasks: Task[] = loadTasks()
// tasks.forEach(addListItem)
//
// form?.addEventListener("submit", (e) => {
//     e.preventDefault()
//
//     if(input?.value == '' || input.value == null) return
//
//     const newTask = {
//         id: uuidV4(),
//         title: input.value,
//         completed: false,
//         createdAt: new Date()
//     }
//
//     tasks.push(newTask)
//     saveTasks()
//     addListItem(newTask)
// })
//
// function addListItem(task: Task) {
//     const item = document.createElement('li')
//     const label = document.createElement('label')
//     const checkbox = document.createElement('input')
//
//     checkbox.addEventListener("change", () => {
//         task.completed = checkbox.checked
//         saveTasks()
//     })
//
//
//     checkbox.type = 'checkbox'
//     checkbox.checked = task.completed
//
//     label.append(checkbox, task.title)
//     item.append(label)
//     list?.append(item)
//     input.value = ''
// }
//
// function saveTasks() {
//     localStorage.setItem('Tasks', JSON.stringify(tasks))
// }
//
// function loadTasks(): Task[] {
//     const tasksJSON = localStorage.getItem('Tasks')
//     if(tasksJSON == null) return []
//     return JSON.parse(tasksJSON)
// }


import Typewriter from "./Typewriter";

const typewriter = new Typewriter(document.querySelector(".whitespace") as HTMLDivElement, { loop: true })

typewriter
    .typeString("Where do I start?")
    .pauseFor(1000)
    .typeString("\n\nfunction")
    .deleteChars(8)
    .typeString("const temp")
    .pauseFor(150)
    .deleteAll(10)
    .typeString("Why is this so hard?")
    .pauseFor(1000)
    .typeString("\n\nDoes everyone struggle this much?")
    .pauseFor(1000)
    .typeString("\n\nThere has to be an easier way")
    .pauseFor(1000)
    .deleteAll(10)
    .start()

