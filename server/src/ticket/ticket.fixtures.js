module.exports={
    assistants:[
        {
            id: 1,
            name: "Fabian Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567890",
            address: "Calle falsa 123"
        },
        {
            id: 2,
            name: "Andres Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567891",
            address: "Calle falsa 124"
        },
    ],
    post:{
        ticket1:{
            id:1,
            seat: "A1",
            assistant_id: 1
        },
        ticket2:{
            id:2,
            seat: "A2",
            assistant_id: 2
        },
        ticketWrongSeatFormat:{
            seat: 23,
            assistant_id: 1
        },
        ticketBusySeat:{
            seat: "A1",
            assistant_id: 1
        }
    },
    put:{
        ticket1:{
            seat: "A7",
            assistant_id: 1
        }
    }
}