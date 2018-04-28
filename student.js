class Student {
    constructor(firstName, lastName, birthDay, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
        this.presenceFactor = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "Редиска!",
            NORMAL: "Норм, но можно лучше",
            GOOD: "Ути какой молодчинка!"
        };
    }

    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    get avaragePresence() {
        var precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }    

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    summary() {
        if (this.averageMark < this.goodMarksMin && this.avaragePresence < this.presenceFactor) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.avaragePresence < this.presenceFactor)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}


