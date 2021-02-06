export function clone<T>(item: T): T {
    return <T>JSON.parse(JSON.stringify(item));
}