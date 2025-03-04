import { useParams } from "react-router-dom";
import { ChapterPage, Heading, SiderBar } from "../../components/Read";
import { useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchChapterId } from "../../redux/slice/controlSlice";

export default function Read() {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>(); // Định nghĩa rõ ràng kiểu `id`
  const chapterId = id ?? ""; // Đảm bảo không bị undefined

  useEffect(() => {
    dispatch(fetchChapterId(chapterId));
  }, [chapterId]);

  return (
    <div className="overflow-hidden ">
      <Heading />
      <div className="flex h-full w-full">
        {/* Phần chính mở rộng khi sidebar đóng */}
        <ChapterPage chapterId={chapterId} />
        {/* Sidebar */}
        <SiderBar />
      </div>
    </div>
  );
}
