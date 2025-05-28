export function Render(data, place, component) {
    place.innerHTML = ''
    if (Array.isArray(data)) {
        for (let item of data) {
            const element = component(item);
            place.append(element);
        }
        return;
    }

    const element = component(data);
    place.append(element);
}