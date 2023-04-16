import styles from './Pagination.module.css'


function Pagination({ changeCurrentPage, currentPage, countPages, }) {
    let pages = []



    for (let i = 1; i <= countPages; i++) {
        pages.push(
            <a
                onClick={() => changeCurrentPage(i)}
                className={currentPage === i ? styles['active'] : ''}
                key={i}
                type='button'>{i}
            </a>)
    }


    return (
        <div className={styles['pagination']} >
            <a onClick={() => {
                if (currentPage > 1) {
                    changeCurrentPage(currentPage - 1)
                }
            }}
                type='button'>
                &laquo;
            </a>
            {pages}
            <a onClick={() => {
                if (currentPage < countPages ) {
                    changeCurrentPage(currentPage + 1)
                }
            }}
                type='button'>
                &raquo;
            </a>
        </div >

    )
}

export default Pagination