enum Status {
  Pending = 'pending',
  InProgress = 'in-progress',
  Completed = 'completed',
}

type TaskStatus = Status.Pending | Status.InProgress | Status.Completed;

type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  dueDate?: Date;
};

const taskList: Task[] = [
  {
    id: 1,
    title: 'Design login page',
    description: 'Create wireframe and UI design for the login page.',
    status: Status.InProgress,
    dueDate: new Date('2026-03-05'),
  },
  {
    id: 2,
    title: 'Implement authentication API',
    description: 'Build and test JWT-based authentication endpoint.',
    status: Status.Pending,
    dueDate: new Date('2026-03-10'),
  },
  {
    id: 3,
    title: 'Fix dashboard bug',
    description: 'Resolve issue where stats cards do not update after refresh.',
    status: Status.Completed,
  },
  {
    id: 4,
    title: 'Write unit tests for user service',
    description: 'Increase test coverage for user-related business logic.',
    status: Status.InProgress,
    dueDate: new Date('2026-02-20'),
  },
];

const createTask = (
  id: number,
  title: string,
  description: string,
  status: Status = Status.Pending, // default parameter
  dueDate?: Date,
): Task => {
  return { id, title, description, status, dueDate };
};

const updateTaskStatus = (task: Task, newStatus: Status): Task => {
  return { ...task, status: newStatus };
};

function findTaskBy<T extends keyof Task>(
  taskList: Task[],
  key: T,
  value: Task[T],
): Task[] {
  return taskList.filter((task) => task[key] === value);
}

// Create tasks
const task1 = createTask(
  1,
  'Write summary',
  'Finish the course summary section',
);
const task2 = createTask(
  2,
  'Refactor code',
  'Improve TypeScript generics example',
  Status.InProgress,
);

taskList.push(task1, task2);

// Update task
const updatedTask = updateTaskStatus(task1, Status.Completed);

// Find taskList by status
const pendingTasks = findTaskBy(taskList, 'status', Status.Pending);

console.log('Updated Task:', updatedTask);
console.log('Pending Tasks:', pendingTasks);
