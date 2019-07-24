interface Course {
  guid: string;
  courseTitle: string;
  modules: Module;
}
interface Module {
  guid: string;
  moduleTitle: string;
  moduleContent?: string;
  moduleStatus: Status;
}
interface Status {
  key: string;
  displayName: string;
}

class Course implements Course {
  guid: string;
  courseTitle: string;
  modules: Module;
}
class Module implements Module {
  guid: string;
  moduleTitle: string;
  moduleContent?: string;
  moduleStatus: Status;
}
class Status implements Status {
  key: string;
  displayName: string;
}
