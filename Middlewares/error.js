const INTERNAL_SERVER_ERROR = 500;

const errorMiddleware = (err, _req, res, _next) => {
    console.log(err);

    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    return res.status(INTERNAL_SERVER_ERROR).json({
        error: {
            message: 'Internal server error',
        },
    });
};

module.exports = errorMiddleware;