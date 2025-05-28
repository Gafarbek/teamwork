import { Render } from "../utils/render";
import { useService } from "../utils/useService";

export async function main(depot, comp, overlays) {
    try {
        const { data: blogs } = await useService('blogs').find();

        Render(blogs.data, depot, comp);
    } catch (e) {
        console.log('error');
    } finally {
        overlays.classList.add('hidden');
    }
}