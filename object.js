var gla = {
    Name: 'TATA Punch',
    Year: '2024',
    Price: '1000000',
    nested: function(ab) {
        console.log('TATA Punch is good and do try it');
    },
    Rating: {
        India: 8,
        USA: 9,
        UK: 7,
        features: {
            Warrenty: 5,
            Gears: 'Manual',
            Details: function() {
                console.log('Details of the car:');
            }
        }
    }
};