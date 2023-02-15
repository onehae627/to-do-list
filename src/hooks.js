import { useRef, useState, useMemo } from "react";
import { useRecoilState } from "recoil";
import { todosAtom, lastTodoIdAtom } from "./atoms";
import { dateToStr } from "./util";
import produce from "immer";
export function useTodoOptionDrawerStatus() {
  const [todoId, setTodoId] = useState(null);
  const opened = useMemo(() => todoId !== null, [todoId]);
  const close = () => setTodoId(null);
  const open = (id) => setTodoId(id);

  return {
    todoId,
    opened,
    close,
    open,
  };
}

export function useTodosStatus() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [lastTodoId, setLastTodoId] = useRecoilState(lastTodoIdAtom);
  const lastTodoIdRef = useRef(lastTodoId);

  lastTodoIdRef.current = lastTodoId;

  const addTodo = (regDate, newContent) => {
    const id = ++lastTodoIdRef.current;
    setLastTodoId(id);

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date(regDate)),
    };

    setTodos((todos) => [newTodo, ...todos]);

    return id;
  };

  const modifyTodo = (index, regDate, content) => {
    const newTodos = produce(todos, (draft) => {
      draft[index].regDate = dateToStr(new Date(regDate));
      draft[index].content = content;
    });
    setTodos(newTodos);
  };

  const modifyTodoById = (id, regDate, newContent) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return;
    }

    modifyTodo(index, regDate, newContent);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  };

  const removeTodoById = (id) => {
    const index = findTodoIndexById(id);

    if (index != -1) {
      removeTodo(index);
    }
  };

  const findTodoIndexById = (id) => {
    return todos.findIndex((todo) => todo.id == id);
  };

  const findTodoById = (id) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return null;
    }

    return todos[index];
  };

  const toggleTodoCompletedById = (id) => {
    const index = findTodoIndexById(id);

    if (index == -1) {
      return null;
    }
    setTodos(
      produce(todos, (draft) => {
        draft[index].completed = !draft[index].completed;
      })
    );
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    modifyTodoById,
    removeTodo,
    removeTodoById,
    findTodoById,
    toggleTodoCompletedById,
  };
}
