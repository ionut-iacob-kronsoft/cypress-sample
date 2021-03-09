import { FILTERS, ImageGeneratorRequest } from "./Form";

export class Utils {

    public static composeUrlFromRequest(request: ImageGeneratorRequest | undefined) {
        if (request === undefined) {
            return '';
        }
        const filter = request.filter === FILTERS.NONE ? '' : `/${request.filter.toLowerCase()}`;
        return `https://placeimg.com/1000/1000/${request?.category?.toLowerCase()}${filter}?random=${new Date().valueOf()}`;
    }

}