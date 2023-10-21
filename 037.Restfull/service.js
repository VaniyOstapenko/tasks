const arr =
    [
        { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
        { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
        { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
        { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 },
        { "id": "firebasestorage", "label": "Firebase Storage", "category": "databases", "priority": 2 },
        { "id": "ibmcloudant", "label": "IBM Cloudant", "category": "databases", "priority": 2 },
        { "id": "react", "label": "React", "category": "webTechnologies", "priority": 1 },
        { "id": "angularjs", "label": "ANGULARJS", "category": "webTechnologies", "priority": 1 },
        { "id": "redux", "label": "Redux", "category": "webTechnologies", "priority": 1 },
        { "id": "materialui", "label": "Material UI", "category": "webTechnologies", "priority": 1 },
        { "id": "git", "label": "Git", "category": "otherSkills", "priority": 2 },
        { "id": "adobephotoshop", "label": "Adobe Photoshop", "category": "otherSkills", "priority": 2 },
    ]

function allElementArr() {
    return arr
}

function oneElementArr(id) {
    const new_arr = arr.filter((el) => el.id == id);
    if (new_arr == 0) throw new Error('id отсутствует')
    return new_arr;
}

function createElementArr(label, category, priority) {
    const new_arr = arr.filter((el) => el.label == label)
    if (new_arr.length > 0) throw new Error('Элемент вналичии');
    const newObj = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    }
    arr.push(newObj);
    return arr;
}

function updateElementArr(id, label, category, priority) {
    const new_arr = arr.filter((el) => el.id !== id)
    if (new_arr.length == arr.length) throw new Error('id не существует');
    const newObj = {
        id: id,
        label: label,
        category: category,
        priority: priority
    }
    new_arr.push(newObj);
    return new_arr;
}

function deleteElementArr(id) {
    const newArr = arr.filter((el) => el.id !== id);
    if (newArr.length == arr.length) throw new Error('Элемента не существует');
    return newArr;
}

module.exports = { allElementArr, oneElementArr, createElementArr, updateElementArr, deleteElementArr };