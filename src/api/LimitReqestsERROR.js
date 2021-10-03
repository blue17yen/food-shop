
export class LimitRequestsError extends Error {
    constructor(message) {
        super(message);
        this.name = "LimitRequestsError";
        this.message = message;
    }
}