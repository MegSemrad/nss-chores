let people = []

export const useFamilyMembers = () => people.slice()

export const getFamilyMembers = () => fetch("http://localhost:8040/familymembers")
    .then(response => response.json())