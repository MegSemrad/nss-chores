let chores = []

export const useChores = () => chores.slice()

export const getChores = () => fetch("http://localhost:8040/chores")
    .then(response => response.json())
    .then(data => chores = data)