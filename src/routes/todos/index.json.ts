import type { RequestHandler} from "@sveltejs/kit";

let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async ({request}) => {
    const data = await request.formData()
    const text = data.get("text")
    todos.push({
        created_at: new Date(),
        text: text.toString(),
        done: true
    })
    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}