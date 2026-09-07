class SnakesAndLaddersInstance {
    player_ids: string[]
    token_positions: Record<string, number>
    constructor(player_ids: string[]) {
        this.player_ids = player_ids
        this.token_positions = {}
    }
}

export default SnakesAndLaddersInstance