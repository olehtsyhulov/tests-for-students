describe('index.html', () => {

    describe("Level 1 heading", () => {
        it("h1 element should say 'Hello World!'", () => {
            let element = document.getElementById('greeting').innerText;
            expect(element).to.equal('Hello World!');
        })

        it("should input be empty", () => {
            let element = document.getElementById('result').value;
            expect(element).to.be.empty();
        })

        it('should set 5 to input after click button', () => {
            document.getElementById('click-button').click();
            let element = document.getElementById('result').value;
            expect(element).to.equal('5');
        });
    })
})
