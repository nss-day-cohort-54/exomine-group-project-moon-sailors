export const database = {
    governors: [
        { id: 1, name: "Joe Dirt", activeStatus: true, colonyId: 1 },
        { id: 2, name: "Buffalo Bill", activeStatus: true, colonyId: 2 },
        { id: 3, name: "John Wayne Gacey", activeStatus: false, colonyId: 2 },
        { id: 4, name: "Lady Gaga", activeStatus: true, colonyId: 3 },
        { id: 5, name: "Demi Tomato", activeStatus: true, colonyId: 1 },
        { id: 6, name: "Miley Cyrus", activeStatus: false, colonyId: 3 }
    ],
    colonies: [
        { id: 1, name: "Naboo" },
        { id: 2, name: "East Nashville" },
        { id: 3, name: "Uranus" }
    ],
    facilities: [
        { id: 1, name: "Nachos", activeStatus: true },
        { id: 2, name: "Amazon", activeStatus: true },
        { id: 3, name: "Nestle", activeStatus: true },
        { id: 4, name: "Licorice", activeStatus: false }
    ],
    minerals: [
        { id: 1, name: "Gold" },
        { id: 2, name: "Kryptonite" },
        { id: 3, name: "Vibranium" }
    ],
    mineralFacilities: [
        { id: 1, facilityId: 1, mineralId: 3, mineralAmount: 70 },
        { id: 2, facilityId: 1, mineralId: 1, mineralAmount: 420 },
        { id: 3, facilityId: 2, mineralId: 1, mineralAmount: 69 },
        { id: 4, facilityId: 2, mineralId: 2, mineralAmount: 666 },
        { id: 5, facilityId: 3, mineralId: 3, mineralAmount: 123 },
        { id: 6, facilityId: 3, mineralId: 2, mineralAmount: 1 },
        { id: 7, facilityId: 4, mineralId: 1, mineralAmount: 2 },
        { id: 8, facilityId: 4, mineralId: 3, mineralAmount: 55 }
    ],
    colonyMinerals: [
        { id: 1, amount: 0, colonyId: 1, mineralId: 1 },
        { id: 2, amount: 0, colonyId: 1, mineralId: 3 },
        { id: 3, amount: 0, colonyId: 1, mineralId: 2},
        { id: 4, amount: 0, colonyId: 2, mineralId: 1 },
        { id: 5, amount: 0, colonyId: 2, mineralId: 3 },
        { id: 6, amount: 0, colonyId: 2, mineralId: 2},
        { id: 7, amount: 0, colonyId: 3, mineralId: 1 },
        { id: 8, amount: 0, colonyId: 3, mineralId: 3 },
        { id: 9, amount: 0, colonyId: 3, mineralId: 2}
    ],
    transientState: {}
}


