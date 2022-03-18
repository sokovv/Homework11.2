import Person from '../Person.js';
import Team from '../Team.js';


const deamon = new Person('Демон', 'Deamon')
const enemy = new Team();

test('class "Person" ', () => {
    const data = {
        name: 'Демон',
        type: 'Deamon',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    };

    expect(deamon).toEqual(data)

});
test('Метод add', () => {
    const received = new Team()
    received.add(deamon)

    expect(received.members).toEqual(new Set([deamon]));

});

test('Метод add(Ошибка добавления)', () => {
    const received = () => {
        const dark = new Team()
        dark.add(deamon)
        return dark.add(deamon)
    }
    expect(received).toThrow();
});

