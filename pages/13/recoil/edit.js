import { isEditState } from "@/src/commons/store";
import ExampleWrite from "@/src/components/units/example/write";
import { useRecoilState } from "recoil";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  setIsEdit(true);
  return (
    <>
      <ExampleWrite />
    </>
  );
}
