class Checklist {
    constructor(groups = []) {
        this.groups = groups;
    }

    addGroup(group) {
        this.groups.push(group);
    }
}

class SubGroup {
    constructor(title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addSubGroup(subGroup) {
        this.subGroups.push(subGroup);
    }
}

class Group {
    constructor (title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addGroup(group) {
        this.subGroups.push(group);
    }
}

class Check {
    constructor(name, value = 0) {
        this.name = name;
        this.value = value;
    }

    addCheck(check) {
        this.checks.push(check);
    }
}
let  Lista = [];

let groups = [];

let checkListGuitar= new Checklist(new Group('Instrumentos', [new SubGroup('Fender', [],[new Check('Stratocaste'), new Check('Telcaster')])]));
let checkListCamaras = new Checklist(new Group('camaras', [new SubGroup('profesionales', [], [new Check('Niko'), new Check('Canon')])]));
let checkListCarros = new Checklist(new Group('Carros', [new SubGroup('Nissan', [], [new Check('March'), new Check('Altima')])]));
let checkListProcesadores = new Checklist(new Group('Prcesadores', [new SubGroup('AMD', [], [new Check('Ryzen 6000x'), new Check('Ryzen 5pro')])]));
let Listas = [...Lista, checkListGuitar, checkListCamaras, checkListCarros, checkListProcesadores];

Listas.map(element => {
    console.log("Nombre del grupo: ", element.groups.title);
    console.log(element.groups);
    element.groups.subGroups.map(subGroup => {
        console.log(subGroup);
    });
    console.log("                          ");
});

Lista.filter(function(){
    return true;
}); 