import { useEffect, useState } from "react";
import "../styles/pagination.scss";
import ChevronRight from "../assets/icons/chevron-right.png";
import ChevronLeft from "../assets/icons/chevron-left.png";

interface Props {
    totalPages: number;
    currentPage: number;
    pageClicked: (num: number) => void;
}

const PaginationComponent = ({ totalPages, currentPage, pageClicked }: Props) => {
    const [pages, setPages] = useState<number[]>([]);

    const prevPage = () => {
        pageClicked(currentPage - 1);
    };

    const nextPage = () => {
        pageClicked(currentPage + 1);
    };

    useEffect(() => {
        let pagesList: number[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pagesList.push(i);
        }
        setPages(pagesList);
    }, [totalPages]);

    return (
        <div className="pagination-wrapper">
            <button onClick={prevPage} disabled={currentPage <= 1 ? true : false}>
                <img src={ChevronLeft} alt="Left icon" />
            </button>

            <div className="pages">
                {pages &&
                    pages
                        .map((page, index) => (
                            <p
                                key={index}
                                onClick={() => pageClicked(page)}
                                className={`${currentPage === page ? "active" : ""}`}
                            >
                                {page}
                            </p>
                        ))
                        .slice(0, 3)}

                {pages && pages.length > 5 && <p className="ellipsis">...</p>}

                {pages &&
                    pages.length > 3 &&
                    pages
                        .map((page, index) => (
                            <p
                                key={index}
                                onClick={() => pageClicked(page)}
                                className={`${currentPage === page ? "active" : ""}`}
                            >
                                {page}
                            </p>
                        ))
                        .slice(-2)}
            </div>

            <button onClick={nextPage} disabled={currentPage >= totalPages ? true : false}>
                <img src={ChevronRight} alt="Right icon" />
            </button>
        </div>
    );
};

export default PaginationComponent;
