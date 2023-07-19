const filter = (arr, key, val) => {
    const result = [];
    arr.forEach(item => {
        for(key in item) {
            if (item[key] === val) {
                result.push(item);
            }
        }
    })
    return result;
};
let objects = [
    { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
    { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
    { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
]

filter(objects, 'email', 'info@methed.ru');
filter(objects, 'company', 'METHED');

export default filter;