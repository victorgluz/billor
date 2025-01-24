import { randomUUID } from "crypto"

export class DatabaseMemory {
    #trucks = new Map()

    list(search){
        return Array.from(this.#trucks.entries())
        .map((truckArray) => {
            const id = truckArray[0]
            const data = truckArray[1]

            return {
                id,
                ...data
            }
        })
        .filter(truck => {
            if (search){
                return truck.model.includes(search)
            }

            return true
        })
    }

    create(truck){
        const truckId = randomUUID()
        this.#trucks.set(truckId, truck)
    }

    update(id, truck){
        this.#trucks.set(id, truck)
    }

    delete(id){
        this.#trucks.delete(id)
    }
}