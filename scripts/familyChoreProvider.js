let familyChores = []

export const useFamilyChores = () => familyChores.slice()

export const getFamilyChores = () => fetch("http://localhost:8040/familychores")
    .then(response => response.json())
    .then(data => familyChores = data)