import {EngineEvents} from '../engine.events';

export function BackspaceReducer(source: EngineEvents.BufferEvent, event: EngineEvents.BackspaceEvent): EngineEvents.BufferEvent {
    const b = {...source};
    b.text[b.row] = b.text[b.row].slice();
    if (b.column > 0) {
        b.text[b.row].splice(b.column - 1, 1);
        b.column--;
    } else if (b.row > 0) {
        b.text.splice(b.row, 1);
        b.row--;
        b.column = b.text[b.row].length;
    }
    return b;
}
