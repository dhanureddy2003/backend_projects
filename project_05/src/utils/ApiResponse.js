class ApiResponse {
    constructor(
        statusCode,
        message = "success",
        data
    ){
        this.data = data,
        this.message = message,
        this.statusCode = statusCode < 400
    }
}

export default ApiResponse;