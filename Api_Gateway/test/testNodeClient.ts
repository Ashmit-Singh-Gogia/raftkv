import { sendRequest } from "../src/services/nodeClient.js";
import type { nodeInfo } from "../src/types/nodeInfo.js";
import type { nodeRequest } from "../src/types/nodeRequest.js";

const nodeInfo: nodeInfo = {
    address: "127.0.0.1",
    httpPort: 3001,
    nodeId: "1",
    grpcPort: 5001
}

const nodeRequest: nodeRequest = {
    method: "PUT",
    path: "/internal/kv/name",
    body: {
        value: "Ash"
    }
}

async function test() {
    try {
        const response = await sendRequest(nodeInfo, nodeRequest);
        console.log(response);
    } catch (err) {
        console.log(`Node communication failed ${err}`)
    }
}

test();