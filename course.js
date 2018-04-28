class Course {
    constructor() {
        var sergey = new Student('sergey', 'karpovich', '01/20/1993', [90, 60, 90]);
        var andrey = new Student('karpovich', 'andrey', '03/28/1986', [90, 90, 90]);

        sergey.present();
        sergey.present();
        sergey.absent();

        andrey.present();
        andrey.present();
        andrey.present();

        this.students = [sergey, andrey];
    }
    attendance(lastName) {
        if (!arguments.length) {
            return this.students.reduce((r, s) => r + s.avaragePresence, 0) / this.students.length;
        }
        return this.students.sort(function (a, b) { return b.avaragePresence - a.avaragePresence }).findIndex(s => s.lastName === lastName) + 1;
    }
}

var course = new Course();

console.log(course.attendance());
console.log(course.attendance('karpovich'));
