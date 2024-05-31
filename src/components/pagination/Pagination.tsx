import { DOTS, usePaginationRange } from "@/hooks/usePaginationRange";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Pagination({
  totalPageCount,
  currentPage,
  setCurrentPage,
  buttonConst,
  siblingCount,
  gapCount,
}: {
  totalPageCount: number;
  currentPage: number;
  setCurrentPage: any;
  buttonConst: number;
  siblingCount: number;
  gapCount: number;
}) {
  // const [totalPageCount] = useState(Math.ceil(data.length / contentPerPage));
  // const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePaginationRange({
    totalPageCount,
    buttonConst,
    siblingCount,
    currentPage,
    gapCount,
  });

  function goToNextPage() {
    setCurrentPage((page: number) => page + 1);
  }
  function gotToPreviousPage() {
    setCurrentPage((page: number) => page - 1);
  }
  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div className="flex items-center">
      <a
        onClick={currentPage === 1 ? () => null : gotToPreviousPage}
        className="font-inter relative inline-flex items-center rounded-l-md border border-white/20 px-2 py-2 text-[#2668d8] hover:cursor-pointer focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
      </a>
      {paginationRange?.map((item, index) => {
        if (item === DOTS) {
          return (
            <button
              key={index}
              className={`paginationItem border border-white/20 px-4 py-1.5 text-[#2668d8]`}
            >
              &#8230;
            </button>
          );
        }
        return (
          <a
            key={index}
            onClick={changePage}
            className={
              currentPage === item
                ? "font-inter relative z-10 inline-flex items-center border border-white/20 bg-[#2668d8] px-4 py-2 text-sm font-medium text-[#FAFAFA] hover:cursor-pointer focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                : "font-inter relative inline-flex items-center border border-white/20 px-4 py-2 text-sm font-medium text-[#6B7280] hover:cursor-pointer focus:z-20 focus:outline-offset-0"
            }
          >
            <span>{item}</span>
          </a>
        );
      })}
      <a
        onClick={currentPage === totalPageCount ? () => null : goToNextPage}
        className="font-inter relative inline-flex items-center rounded-r-md border border-white/20 px-2 py-2 text-[#2668d8] hover:cursor-pointer focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <FaChevronRight className="h-5 w-5 " aria-hidden="true" />
      </a>
    </div>
  );
}
