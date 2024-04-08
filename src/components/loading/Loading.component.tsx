const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div
                className="spinner-border text-red"
                role="status"
            >
                <span></span>
            </div>
        </div>
    );
};

export default Loading;
