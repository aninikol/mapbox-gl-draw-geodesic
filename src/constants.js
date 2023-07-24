if (typeof MapboxDraw.constants !== 'undefined') {
    const drawConstants = await import('@mapbox/mapbox-gl-draw/src/constants');
    export const { cursors, geojsonTypes, events, meta, activeStates } = drawConstants;
} else {
    export const  { cursors, geojsonTypes, events, meta, activeStates } = MapboxDraw.constants;
}
export const modes = {
    ...originalModes,
    DRAW_CIRCLE: 'draw_circle'
};

export const properties = {
    CIRCLE_RADIUS: 'circleRadius',
    CIRCLE_HANDLE_BEARING: 'circleHandleBearing'
};
