
const errorMiddleware = (err, req, res, next)=>{

    try{
        let error = {...err};

        //bad object Id
        if(err.name === 'CastError'){
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode   = 404;
        }

        //duplicate key
        if(err.code === 11000){
            const message = 'Duplicate feild value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        //validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map((val)=> val.message);
            error.message = new Error(message.join(', '));
        }

    res.status(error.statusCode || 500).send({sucess: false, error: error.message || 'Server Error'} );

    }catch(error){
        next(error);
    }
    
};

export default errorMiddleware;

