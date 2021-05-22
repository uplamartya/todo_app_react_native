 //const[ list, setList] = useState();
    const TodoReducers = (state = initialState, action) => {
        const initialState = {
            list: []
        }
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    state,
                    list: [state.todo_list,
                    {
                        id: id,
                        data: data

                    }
                    ]
                };

            case 'DELETE_TODO':
                const newList = state.list.filter(inputId != action.id)
                return {
                    state,
                    list: newList
                };

        }
        return state;
    }


export default TodoReducers;