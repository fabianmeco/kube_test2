module.exports = {
    post:{
        assistant:{
            id: 1,
            name: "Fabian Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567890",
            address: "Calle falsa 123"
        },
        assistant2:{
            id: 2,
            name: "Andres Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567891",
            address: "Calle falsa 124"
        },
        assistantWrong:{
            name: "Fabian Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567890",
            address: "Calle falsa 123"
        },
        assistantNoRequired:{
            name: "Fabian Mendoza",
            cid: "1234567890",
            address: "Calle falsa 123"
        },
        assistantFailsJoi:{
            name: "Pepito Perez",
            cid:1234567899            
        }
    },
    put:{
        assistant:{
            name: "Fabian Andres",
            email: "fabian@rog.com",
            cid: "1234567891",
            address: "Calle falsa 124"
        },
        assistantDuplicatedId:{            
            name: "Andres Mendoza",
            email: "fabian@rogelio.com",
            cid: "1234567891",
            address: "Calle falsa 124"
        },
        assistantWrong:{
            name: "Andres Mendoza",
            email: "fabian@rogelio",
            cid: "1234567891",
            address: "Calle falsa 124"
        }
    }
}