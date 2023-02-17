
export interface Slip {
    slip_id: string;
    advice: string;
}

export interface RootObject {
    slip: Slip;
}
