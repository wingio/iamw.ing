import { sourceColorFromImage, themeFromSourceColor, type Theme } from "@material/material-color-utilities"

const colorCache = new Map<string, number>()

// Wrapper around `sourceColorFromImage` that caches the result, this
// should - in addition to saving resources - prevent the same image from
// erroniously spitting out slightly different colors each time.
async function getColorFromImage(image: HTMLImageElement): Promise<number> {
    if (colorCache.has(image.src)) return colorCache.get(image.src)!
    else {
        let color = await sourceColorFromImage(image);
        colorCache.set(image.src, color);
        return color;
    }
}

/**
 * Generates a Material 3 color palette from a source image.
 * 
 * @param image Image to source colors from
 * @returns A Material 3 theme, with both light and dark palettes
 */
export async function getThemeFromImage(image: HTMLImageElement): Promise<Theme> {
    return await themeFromSourceColor(await getColorFromImage(image));
}