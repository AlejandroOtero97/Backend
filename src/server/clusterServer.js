import cluster from 'cluster'
import os from 'os'
import createServer from './createServer.js';

const cpu = os.cpus().length;

export default function clusterServer(app, port){
    if(cluster.isPrimary) {
        for(let i=0; i<cpu; i++){
            cluster.fork();}
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} finalizó!`);
            cluster.fork();});
    } else {
        createServer(app, port);
    }
}
