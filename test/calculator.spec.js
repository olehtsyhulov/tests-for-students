
describe('Calculator', () => {
    /**---------------------------With Faker------------------------------------------*/
    let fakeNum1, fakeNum2;
    beforeEach(()=>{
        fakeNum1 = faker.random.number();
        fakeNum2 = faker.random.number();
    });

    describe('On Addition', () => {

        it('should sum two numbers with to equal', () => {
            expect(add(fakeNum1, fakeNum2)).to.equal(fakeNum1+fakeNum2);
        });

        it('should sum two numbers with equal', () => {
            expect(add(fakeNum1, fakeNum2)).equal(fakeNum1+fakeNum2);
        });
    })

    describe('On Subtraction', () => {
        it('should subtract two numbers', () => {
            expect(subtract(fakeNum1, fakeNum2)).to.equal(fakeNum1 - fakeNum2);
        })
    })

    /**---------------------------Without Faker------------------------------------------*/

    describe('On Multiplication', () => {
        it('should multiply two numbers', () => {
            expect(multiply(3, 2)).to.equal(6);
            expect(multiply(-31, 32)).to.equal(-992);
            expect(multiply(-5, -2)).to.equal(10);
        })
    })

    describe('On Division', () => {
        it('should divide two numbers', () => {
            expect(divide(4, 2)).to.equal(2);
            expect(divide(50, 5)).to.equal(10);
        })
        it('should return NaN if the denominator is zero', () => {
            expect(divide(4, 0)).to.equal(undefined);
            expect(divide(-15, 0)).to.equal(undefined);
        })
    })
})

describe('On Sort Array', ()=>{
    let array;
    beforeEach(()=>{
        array = [faker.random.number(), faker.random.number(), faker.random.number()];
    });

    it('should return empty array with incorrect input data',  ()=> {
        expect(sortArray(faker.name.firstName())).to.be.empty();
    });

    it('should return sorted array', () => {
        const result = sortArray(array);
        for (let count =0;count<result.length-1;count++) {
            expect(result[count]<=result[count+1]).to.be.true;
        }
    });

    // it('should return sorted array(another way)', () => {
    //     expect(sortArray(array)).to.have.ordered.members(array.sort())
    // });
})
