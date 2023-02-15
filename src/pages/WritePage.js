import { TextField } from "@mui/material";

export default function WritePage() {
    return (
      <>
      <div className="flex-1 flex p-10 flex-col gap-7">  
           {/* textfield는 <div><label></label></div><div><input></input></div> 으로 됨 */}
          <TextField label="언제 해야하나요?" focused type="datetime-local" />
          <TextField label="무엇을 해야하나요?" className="flex flex-1" InputProps={{className:"bg-blue-500 flex-1 flex-col"}} inputProps={{className:"!bg-pink-500 flex-1"}} multiline/>        
      </div>
      </>
    );
  }
  