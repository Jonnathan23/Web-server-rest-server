import { Server } from "./app/presentation/server";

(async () => {
    main();
})()

function main() {
    const server = new Server();

    server.start();
}