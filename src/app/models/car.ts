export interface Car {
    name: string;
    number: string;
    road: string;
    rfid: string;
    carType: string;
    carSubType?: string;
    length: number;
    weight: number;
    weightTons: number;
    color: string;
    owner: string;
    built: string;
    comment: string;
    outOfService: boolean;
    location?: {
        userName: string;
        name: string;
        route?: unknown;
        track: {
            userName: string;
            name: string;
        };
    };
    destination?: string;
    load: string;
    hazardous: boolean;
    caboose: boolean;
    passenger: boolean;
    fred: boolean;
    removeComment: string;
    addComment: string;
    kernel?: string;
    utility: boolean;
    finalDestination?: string;
    returnWhenEmpty?: string;
    status: string;
}
