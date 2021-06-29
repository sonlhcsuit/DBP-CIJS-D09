/**
 * 4 phong cách lập trình 
 * lập trình tuần tự
 * mã máy => 
 * 
 * có cấu trúc => thêm nhiều từ khoá
 * 
 * hướng thủ tục / hướng hàm (procedure/function programming) => khiến một vài đoạn code có thể tái sử dụng 
 * dễ dàng và nhanh chóng bằng việc khai báo các thủ tục / hàm
 * 
 * 
 * hướng đối tượng (object oriented programming) => object & class are first-class citizens
 * property: thuộc tính
 * method: phương thức
 * object is an instance of class
 * Class > object
 * 
 * abstraction      : Trừu tượng hoá
 * encapsulization  : Đóng gói
 * polymerization   : Đa hình
 * inheritance      : Kế thừa
 * 
 * hướng chức năng (functional programming) => 
 */


/**
 * Lớp Cá, dùng cho viêc quản lý ao cá, hồ cá
 * 
 * 
 */
class Fish {
    name;
    age;
    type;
    eye;
    mass;
    length;
    // constructor
    constructor(name, age, type, eye, mass, length) {
        this.name = name
        this.age = age
        this.eye = eye
        this.mass = mass
        this.length = length
        this.type = type
    }

    // method - phương thức 
    show() {
        console.log(`Hello I'am ${this.name}  & a ${this.type} ${this.age} year(s) old`)
    }
    swim() {
        console.log(`Swimming ...`)
    }
}

let fish = new Fish("name1", 2, "ca chep", "nau", 5, 1);
let fish2 = new Fish("name2", 1, "ca hoi", "nau", 5, 1);

// fish.show()
// fish2.show()
// fish.swim()
// fish2.swim()

class Shark extends Fish {
    constructor(name, age, eye, mass, length) {
        super(name, age, "Ca Map", eye, mass, length)
    }
    swim() {
        console.log(`Shark is swimming...`)
    }
}
class Alligator extends Fish {
    constructor(name, age, eye, mass, length) {
        super(name, age, "Ca Sau", eye, mass, length)
    }

    // override
    swim() {
        console.log(`Alligator is swimming...`)
    }
}
let shark = new Shark("Shark boy", 2, "Green", 300, 20)
let alligator = new Alligator("Alligator boy", 2, "Green", 300, 20)
shark.show()
alligator.show()
shark.swim()
alligator.swim()

// TigerShark <- Shark <- Fish <- Animal <- 

class TigerShark extends Shark{
    someProp;
    constructor(name, someProp, age, eye, mass, length){
        super(name, age, eye, mass, length)
        this.someProp = someProp;
        this.type = "Ca Map Ho"
    }
}
let tigerShark = new TigerShark("Tiger Shark boy", 2, "Green", 300, 20)
tigerShark.show()