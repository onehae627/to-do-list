import { TextField, Button } from "@mui/material";

export default function WritePage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if(form.regDate.value.length == 0) {
      alert("날짜를 입력해주세요.");
      form.regDate.focus();
      return;
    }

    if(form.content.value.length == 0) {
      alert("할 일을 입력해주세요.");
      form.content.focus();
      return;
    }
  }
    return (
      <>
      <form className="flex-1 flex p-10 flex-col gap-7" onSubmit={onSubmit} >  
           {/* textfield는 <div><label></label></div><div><input></input></div> 으로 됨 */}
          <TextField label="언제 해야하나요?" focused type="datetime-local" name="regDate" />
          <TextField label="무엇을 해야하나요?" className="flex flex-1" InputProps={{className:"flex-1 flex-col"}} inputProps={{className:"flex-1"}} multiline name="content"/>        
          <Button type="submit" variant="contained">
            <span>
            <i className="fa-solid fa-pen"></i>
            </span>
            <span>&nbsp;</span>
            <span>할 일 추가</span>
          </Button>
      </form>
      </>
    );
  }
  