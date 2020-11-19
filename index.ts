import axios from 'axios';

const apiURL = 'https://jsonplaceholder.typicode.com/todos/1';

//declare the element in an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(apiURL).then((response) => {
  const todo = response.data as Todo; // match object to the data

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

//declare the type of each parameter in a function
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
};
