// Implement this as a union type
export interface ApiResponse<T> {
    type: 'car' | 'location' | 'error';
    data: T;
}
