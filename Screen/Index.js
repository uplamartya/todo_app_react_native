function Index() {
    const addTodo = (data) => {
        return {
            type: "ADD_TODO",
            payload: {
                id: newInput(),
                data: data
            }
        }
    }
    const deleteTodo = (id) => {
        return {
            type: "DELETE_TODO"
        }
    }
    const removeTodo = () => {
        return {
            type: "REMOVE_TODO"
        }
    }
}
export default Index;
