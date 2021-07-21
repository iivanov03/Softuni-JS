function architect(name, project) {
    project = Number(project);
    let hour = project * 3;
    let result = `The architect ${name} will need ${hour} hours to complete ${project} project/s.`;
    console.log(result);
}
architect('Georgi', '4');