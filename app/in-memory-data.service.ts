export class InMemoryDataService {
  createDb() {
    let heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Leonardo Dicaprio' },
            { id: 13, name: 'Robert Downey Jr' },
            { id: 14, name: 'Tom Cruise' },
            { id: 15, name: 'Johny Depp' },
            { id: 16, name: 'brad Pitt' },
            { id: 17, name: 'Will Smith' },
            { id: 18, name: 'Tom Hanks' },
            { id: 19, name: 'Mark Wahlberg' },
            { id: 20, name: 'Dwayne Johnson' }
    ];
    return { heroes };
  }
}
