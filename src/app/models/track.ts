import { TrackTypes } from '../types';

export interface Track {
    userName: string;
    name: string;
    comment: string;
    length: number;
    location: string;
    reporter?: string;
    type: TrackTypes;
    carType: string[];
}
