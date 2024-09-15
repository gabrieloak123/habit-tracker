import { db } from "../db"
import { goals } from "../db/schema"

interface CreateGoalRequest {
    title: string,
    desiredWeeklyFrequency: number
}

export async function createGoal({ title, desiredWeeklyFrequency}: CreateGoalRequest) {
    const result = await db.insert(goals).values({
        title,
        desiredWeeklyFrequency
    }).returning() // by default a insertion dont return the inserted data, so we add this

    const goal = result[0]

    return {
        goal,
    }
}