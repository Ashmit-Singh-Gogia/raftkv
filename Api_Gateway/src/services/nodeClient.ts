import type { nodeInfo } from "../types/nodeInfo.js"
import type { nodeRequest } from "../types/nodeRequest.js"
import type { nodeResponse } from "../types/nodeReponse.js"


export async function sendRequest(nodeInfo: nodeInfo, nodeRequest: nodeRequest): Promise<nodeResponse> {

    const { method, path, body } = nodeRequest;
    const url = `http://${nodeInfo.address}:${nodeInfo.httpPort}${path}`;
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: body !== undefined ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(3000),
    });
    const data: unknown = await response.json();
    return {
        statusCode: response.status,
        data
    }
}