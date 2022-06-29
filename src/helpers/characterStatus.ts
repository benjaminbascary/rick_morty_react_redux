class CharacterStatusColor {
    constructor() {}

    getStatusColor(aliveStatus: string) {
        switch(aliveStatus) {
            case 'Alive':
                return 'green'
            case 'Dead':
                return 'red'
            case 'unknown':
                return 'grey'
            default:
                return 'grey'
        }
    }
}

export const characterStatusHandler = new CharacterStatusColor();