function PrintDrawings({ srcList, classNameDiv }) {
    return (
        <div className={classNameDiv}>
            {srcList.map(({ index, src, alt, className }) => (
                <img
                    key={`${alt}-${index}`}
                    src={src}
                    alt={alt}
                    className={className}
                />
            ))}
        </div>
    );
}

export default PrintDrawings;
