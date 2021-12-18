import { Track } from './track';

export interface Location {
    userName: string;
    name: string;
    length: number;
    comment: string;
    reporter?: string;
    carType: string[];
    track: Track[];
}
