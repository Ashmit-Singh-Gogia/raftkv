type HttpMethod = "GET" | "PUT" | "DELETE"

export interface nodeRequest {
    method: HttpMethod;
    path: String;
    body?: unknown;
}
