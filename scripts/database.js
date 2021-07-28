const database = {
    kids: [
        {
            id: 1,
            name: "Justin",
            age: 10
        },
        {
            id: 2,
            name: "Eric",
            age: 42
        },
        {
            id: 3,
            name: "Erin",
            age: 13
        },
        {
            id: 4,
            name: "Myriam",
            age: 14
        },
    ],

    homes: [
        {
            id: 1,
            address: "333 Scissorhands lane",
            size: .25,
            serviceId :4
        },
        {
            id: 2,
            address: "47 Mars Ave",
            size: 1.25,
            serviceId :2
        },
        {
            id: 3,
            address: "1600 Pennsylvania Ave",
            size: 3,
            serviceId :3
        },
        {
            id: 4,
            address: "10 Cloverfield Lane",
            size: 1,
            serviceId :1
        },
        {
            id: 5,
            address: "5592 Kuvalis Unions",
            size: 8,
            serviceId :4
        },
    ],

    services: [
        {
            id: 1,
            serviceType: "mowing",
            price: 20
        },
        {
            id: 2,
            serviceType: "bush trimming",
            price: 15
        },
        {
            id: 3,
            serviceType: "weed pulling",
            price: 12
        },
        {
            id: 4,
            serviceType: "tree trimming",
            price: 25
        },
    ],

    kidHomeAssignments: [
        {
            id: 1,
            kidId: 1,
            homeId: 2
        },
        {
            id: 2,
            kidId: 3,
            homeId: 2
        },
        {
            id: 3,
            kidId: 4,
            homeId: 3
        },
        {
            id: 4,
            kidId: 4,
            homeId: 5
        },
    ]
}

export const getKids = () => {
    return database.kids.map(kid => ({...kid}))
}
export const getHomes = () => {
    return database.homes.map(home => ({...home}))
}
export const getServices = () => {
    return database.services.map(service => ({...service}))
}
export const getKidHomeAssignments = () => {
    return database.kidHomeAssignments.map(assignment => ({...assignment}))
}
