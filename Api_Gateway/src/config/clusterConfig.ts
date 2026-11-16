import type { nodeInfo } from "../types/nodeInfo.js"

export const nodeMap = new Map<string, nodeInfo>([
    ["node-1", { nodeId: "node-1", address: "localhost", httpPort: 3001, grpcPort: 5001 }],
    ["node-2", { nodeId: "node-2", address: "localhost", httpPort: 3002, grpcPort: 5002 }],
    ["node-3", { nodeId: "node-3", address: "localhost", httpPort: 3003, grpcPort: 5003 }],
    ["node-4", { nodeId: "node-4", address: "localhost", httpPort: 3004, grpcPort: 5004 }],
    ["node-5", { nodeId: "node-5", address: "localhost", httpPort: 3005, grpcPort: 5005 }],
]);