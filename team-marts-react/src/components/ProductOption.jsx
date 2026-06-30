const ProductOption = ({index, type, active, onClick}) => {
    return (
        <div
            className={active ? 'col-6 col-lg-3 option black-bg active-product border-right-sm' : 'col-6 col-lg-3 option black-bg border-right-sm'}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-pressed={active}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onClick?.();
                }
            }}
        >
            <div className="option-no">{index}</div>
            <h2 className="option-name">{type}</h2>
        </div>
    )
}

export default ProductOption