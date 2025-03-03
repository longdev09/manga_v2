import ReactPaginate from "react-paginate";

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage,
}: {
  forcePage?: number;
  pageCount: number;
  onPageChange: (event: { selected: number }) => void;
}) => {
  return (
    <ReactPaginate
      previousLabel="←"
      nextLabel="→"
      breakLabel="..."
      pageCount={pageCount}
      forcePage={forcePage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="flex gap-2 mt-2 no-select text-white justify-center  p-2 rounded"
      pageClassName="rounded bg-gray-800 cursor-pointer"
      pageLinkClassName="block px-3 py-1"
      activeClassName="active-btn"
      previousClassName="cursor-pointer"
      nextClassName="cursor-pointer"
      disabledClassName="opacity-50"
    />
  );
};

export default Pagination;
