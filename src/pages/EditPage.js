import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useNoticeSnackbarStatus } from "../components/NoticeSnackbar";
import { useTodosStatus } from "../hooks";

export default function EditPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const noticeSnackbarStatus = useNoticeSnackbarStatus();
  const todosStatus = useTodosStatus();
  const todo = todosStatus.findTodoById(id);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.performDate.value.length == 0) {
      alert("날짜를 입력해주세요.");
      form.performDate.focus();
      return;
    }

    if (form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();
      return;
    }

    const newTodoId = todosStatus.modifyTodoById(
      todo.id,
      form.performDate.value,
      form.content.value
    );

    noticeSnackbarStatus.open(`${todo.id}번 할 일이 수정되었습니다.`);
    navigate(-1);
  };

  const performDateForInput = todo.performDate.substr(0, 16).replace(" ", "T");

  return (
    <>
      <form
        className="flex-1 flex flex-col gap-7 p-6 sm:p-8"
        onSubmit={onSubmit}
      >
        {/* textfield는 <div><label></label></div><div><input></input></div> 으로 됨 */}
        <TextField
          label="언제 해야하나요?"
          focused
          type="datetime-local"
          name="performDate"
          defaultValue={performDateForInput}
        />
        <TextField
          label="무엇을 해야하나요?"
          className="flex flex-1"
          InputProps={{ className: "flex-1 flex-col" }}
          inputProps={{ className: "flex-1" }}
          multiline
          name="content"
          defaultValue={todo.content}
        />
        <Button type="submit" variant="contained">
          <span>
            <i className="fa-solid fa-pen"></i>
          </span>
          <span>&nbsp;</span>
          <span>{todo.id}번 할 일 수정</span>
        </Button>
      </form>
    </>
  );
}
