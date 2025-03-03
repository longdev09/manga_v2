import { useEffect, useState } from "react";
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from "react-icons/fa";
import { useFetchChapters } from "../../hooks/mangadex";
import { MangadexTypes } from "../../types";
import { DateUtils, MangadexUtils } from "../../utils";
import Button from "../common/Button";
import { ItemChapter, ItemChapterGroup } from "./ItemChapter";
import Pagination from "../../components/common/Paginate";
import DataLoading from "../common/DataLoading";
import { MangadexApi } from "../../api";
import { TitleContent } from "../common/Title";

const toggleOrder = {
  [MangadexApi.Static.Order.DESC]: MangadexApi.Static.Order.ASC,
  [MangadexApi.Static.Order.ASC]: MangadexApi.Static.Order.DESC,
};

const ListChapter = ({ mangId }: { mangId: string }) => {
  const [page, setPage] = useState(1);
  const [sortChapter, setSortChapter] = useState(MangadexApi.Static.Order.DESC);
  const {
    total,
    data: chapterList,
    isLoading,
  } = useFetchChapters(mangId, page, {
    order: { chapter: sortChapter },
  });

  const handleSort = () => {
    setSortChapter((prev) => toggleOrder[prev]);
  };

  const handleSetPage = (event: { selected: number }) => {
    setPage(event.selected + 1); // Giữ nguyên page khi total thay đổi
  };

  const [chapterFormat, setChapterFormat] =
    useState<Record<string, MangadexTypes.ExtendChapter[]>>();

  useEffect(() => {
    if (chapterList && chapterList.length > 0)
      setChapterFormat(MangadexUtils.getFormatChapterList(chapterList));
  }, [chapterList]);

  console.log(chapterFormat);

  return (
    <div className="overflow-hidden  flex flex-col bg-[#1c1c1c] rounded-xl border border-[#2e2c2c]">
      <div className="bg-[#2b2929] p-5">
        <Button
          onClick={handleSort}
          className="!rounded-lg !text-sm  "
          name="Sắp xếp"
          variant="primary"
          icon={
            sortChapter === MangadexApi.Static.Order.DESC ? (
              <FaSortAmountDownAlt />
            ) : (
              <FaSortAmountUpAlt />
            )
          }
        />
      </div>
      <DataLoading isLoading={isLoading} height="200px">
        <ul className="flex flex-col overflow-auto max-h-[600px]">
          {chapterFormat &&
            Object.entries(chapterFormat)
              .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
              .map(([, chapterList]) =>
                chapterList.length > 1 ? (
                  <ItemChapterGroup chapterList={chapterList} />
                ) : (
                  <ItemChapter
                    id={chapterList[0].id}
                    translatedLanguage={
                      chapterList[0].attributes.translatedLanguage
                    }
                    roleColor={MangadexUtils.getRoleColor(
                      chapterList[0].user.attributes.roles[0]
                    )}
                    titleChapter={chapterList[0].attributes.title}
                    nameChapter={chapterList[0].attributes.chapter}
                    date={DateUtils.formatDate(
                      chapterList[0].attributes.updatedAt
                    )}
                    flag={chapterList[0].attributes.translatedLanguage}
                    nameScan={
                      chapterList[0].scanlation_group?.attributes?.name ||
                      "no group"
                    }
                    dateTime={DateUtils.formatDateTime(
                      chapterList[0].attributes.readableAt
                    )}
                    username={chapterList[0].user.attributes.username}
                  />
                )
              )}
        </ul>
      </DataLoading>

      <div
        className="p-3 flex justify-center"
        style={{ borderTop: "1px solid #2e2c2c" }}
      >
        <Pagination
          pageCount={Math.ceil(total / 26)}
          onPageChange={handleSetPage}
          forcePage={page - 1}
        />
      </div>
    </div>
  );
};

export default ListChapter;
