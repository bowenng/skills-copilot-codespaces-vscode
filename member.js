function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    };

    var skills = {
        languages: ['JavaScript', 'Python', 'Java'],
        frameworks: ['Angular', 'Django', 'Spring']
    };

    var memberSkills = Object.assign(member, skills);

    console.log(memberSkills);
}