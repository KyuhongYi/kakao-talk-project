module.exports = function (io){
    //io 관련 모든 것
    io.on("connection",async(socket)=>{
        console.log("client is connected",socket.id);
    });
};