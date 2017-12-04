# kube_test2

**Please read all before you start to code**

In this test you should create and REST API and its client for a ticket sale system. 

This system's API allows to create Events and Assistants and allow to an Assistant be registered to an Event. Obviously 
an Assistant can't assists to two different events at the same time.
  
The system's client should look like [the wireframe](https://wireframepro.mockflow.com/view/garusis-kube-test2).
It just allow few operations:

1. Select a pre-existent Assistant and register it in a selected Event.
2. Taking in count the input in the **event** search box, filter the **events** in the dropdown.
3. Taking in count the input in the **users** search box, filter the **users** in the dropdown.
4. Create a new User.

## Event filter
The **event** search box must respond as a multipurpose filter. When you type one or many words in it you must get a 
list of events that match (case insensitive) with at least one word with its name or city.

eg.
**Existent Events**
```
Epica - Cali - 13 oct
Epica - Medellin - 16 oct
Avalanch - Cucuta - 15 Nov
Avalanch - Bogota - 17 Nov
Cuervo de Poe - Cali - 15 Dic
Cuervo de Poe - Bogota - 17 Dic
```

**Search Box input:** *Ca*

**Filtered Events**
```
Epica - Cali - 13 oct
Epica - Medellin - 16 oct
Cuervo de Poe - Cali - 15 Dic
```

## User filter
The **users** search box must respond somewhat like event filter but in this case could match (case insensitive) with 
Name, CID or Email.

eg.
**Existent Events**
```
Marcos Alvarez - ma@gmail.com - 11225522
Fabian Mendoza - fm@gmail.com - 11225523
Fernanda Mariño - fm2@gmail.com - 11225524
```

**Search Box input:** *fm*

**Filtered Events**
```
Fabian Mendoza - fm@gmail.com - 11225523
Fernanda Mariño - fm2@gmail.com - 11225524
```

## Event seed
As you can see, the system's client doesn't allow to create new events. System's API should allow but it's not important,
to start to code, you should seed the event table with specific data using the knex seeder. All basic structure is already 
done, in the seeder directory, you just have to put the necessary setting in the knex file and run `knex seed:run` after
run the migrations.  

#Model description:
*fields between **[fielname]** are optionals*

## Event
```
id: number,
name: string,
city: "Cucuta" || "Bucaramanga" || "Bogota" || "Cali" || "Medellin",
date: Date
```

## Assitant
```
id: number,
cid: string,
name: string,
[photo]: string,
email: string
address: text
```


## Ticket
```
id: number,
eventId: Event.id,
assitantId: Assitant.id
seat: string
```


# Evaluation criteria

Maximum time to solve this tests: **4H**

* **Implementation *(You implement the logic of all requirements)***: 25%
* **Functionality *(The implemented logic works properly)***: 45%
* **Test**: 15%
* **Quality Code**: 15%